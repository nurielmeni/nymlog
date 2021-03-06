const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const { User, validate, validateLogin } = require("../models/user.js");
const express = require("express");
const router = express.Router();

router.get("/current", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log('Create new USER');
  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");
  console.log('Not exist:' , req.body.email);

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });

  user.password = bcrypt.hashSync(user.password, 10);
  await user.save();
 
  console.log('User saved, generating token');
  const token = user.generateAuthToken();
  res
    .header("Access-Control-Allow-Origin: *")
    .header("x-auth-token", token)
    .send({
      _id: user._id,
      name: user.name,
      email: user.email
    });
});

router.post("/login", async (req, res) => {
  // validate the request body first
  console.log(req.body);
  const { error } = validateLogin(req.body);
  if (error) {
    res.statusMessage = error.details[0].message;
    return res.status(400).end();
  }

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.statusMessage = "Could not authenticate: email or password not valid.";
    return res.status(400).end();
  }
  console.log(user);
  console.log("Pass compare: ", req.body.password, user.password);

  let valid = bcrypt.compareSync(req.body.password, user.password);
  if (valid) {
    const token = user.generateAuthToken();
    res.header("Access-Control-Expose-Headers", "x-auth-token");
    res.cookie("access_token", token, { signed: true, maxAge: 300000 });
    res.header("x-auth-token", token).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    res.statusMessage = "Could not authenticate: email or password not valid.";
    return res.status(400).end();
  }
});

module.exports = router;
