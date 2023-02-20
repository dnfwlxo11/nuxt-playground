const { googleLogin, googleAuth, googleAuthRedirect } = require("./auth");

module.exports = {
  google: googleLogin(),
  auth: googleAuth(),
  authRedirect: googleAuthRedirect(),
};
