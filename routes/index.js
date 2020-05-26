const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

/* GET home page. */
router.get("/", auth, function (req, res, next) {
  res.render("index", { title: "MYNedia Logger" });
});

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login - MYNedia Logger" });
});

module.exports = router;
