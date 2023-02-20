const { googleLogin, googleAuth, googleAuthRedirect } = require("./passport/googleStrategy");

module.exports = {
  google: googleLogin(),
  auth: googleAuth(),
  authRedirect: googleAuthRedirect(),
};
