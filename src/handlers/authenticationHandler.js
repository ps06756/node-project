const AuthenticationService = require('../service/authService');

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  AuthenticationService.login(email, password, function(err, token) {
    if (typeof err != 'undefined') {
      res.status(401).send(err);
    }
    else {
      res.status(200).send(token);
    }
  });
}

function logout(req, res) {
  const email = req.email;

  AuthenticationService.logout(email, function(err) {
    if (typeof err !== 'undefined' && err != null) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send('Logout successfull!');
    }
  });
}

module.exports = {
  login,
  logout
};
