const {
  googleLogin,
  googleAuth,
  googleAuthRedirect,
} = require("./passport/googleStrategy");

module.exports = { googleLogin, googleAuth, googleAuthRedirect };
