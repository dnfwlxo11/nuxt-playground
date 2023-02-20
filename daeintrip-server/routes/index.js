const express = require("express");
const { auth, authRedirect } = require("../middleware/index");
const passport = require("passport");
const router = express.Router();

passport.serializeUser((profile, done) => {
  console.log('serialize', profile.id)
  done(null, profile.id)
})

passport.deserializeUser((id, done) => {
  console.log('deserialize', id)
  done(null, id)
})

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/auth", auth, (req, res, next) => {
  console.log("google oauth2.0")

  res.json({ success: true });
});

router.get("/auth/redirect", authRedirect);

router.get("/hello", (req, res, next) => {
  console.log("hello");
  res.json({ success: true });
});

module.exports = router;
