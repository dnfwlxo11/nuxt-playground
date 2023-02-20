const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

function googleAuth() {
  return passport.authenticate(
    "google",
    { scope: ["profile", "email"] },
    (result) => {
      console.log(result);
    }
  );
}

function googleAuthRedirect() {
  return passport.authenticate("google", { failureRedirect: "/hello" });
}

function googleLogin() {
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: "/auth/redirect",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("accessToken", "refreshToken", "profile", "done");
          console.log(accessToken, refreshToken, profile, done);

          console.log("login successed");
          done(null, "/hello");
        } catch (err) {
          console.log("error occurred");
          console.error(err);
          done(null, "/");
        }
      }
    )
  );
}

module.exports = {
  googleAuth,
  googleAuthRedirect,
  googleLogin,
};
