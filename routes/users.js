const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const { User, validate, validateLogin } = require('../models/user.js');
const express = require('express');
const router = express.Router();

router.get('/current', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post('/', async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  user.password = await bcrypt.hash(user.password, 10);
  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });
});

router.post('/login', async (req, res) => {
  // validate the request body first
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  let password = await bcrypt.hash(user.password, 10);
  console.log('password: ', password);
  if (user && password === user.password) {
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  }

  return res.status(400).send('Could not authenticate: email or password not valid.');
});

module.exports = router;