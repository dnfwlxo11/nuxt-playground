const express = require("express");
const { auth, authRedirect } = require("../middleware/index");
const passport = require("passport");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/auth", auth, (req, res, next) => {
  res.json({ success: true }).send(200);
});

router.get("/auth/redirect", authRedirect, (req, res, next) => {
  console.log("google oauth redirect");

  res.json({ success: true }).send(200);
});

router.get("/hello", (req, res, next) => {
  console.log("hello");
  res.json({ success: true }).send(200);
});

module.exports = router;
