const AuthenticationService = require('../service/authService');

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  let token = AuthenticationService.login(email, password);
  res.status(200).send(token);
}

module.exports = {
  login
};
