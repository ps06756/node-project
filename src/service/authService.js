const jwt = require('jsonwebtoken');
const UserAccessor = require('../accessor/userAccessor');

const SECRETKEY = 'asfsdfdffeewrrer';

function login(email, password) {
  let user = UserAccessor.getUserByEmail(email);
  if (typeof user === 'undefined') {
    throw Error('Invalid email/password');
  }
  else if (user.password === password) {
    let data = {
      email: email,
      role: user.role
    };
    const token = jwt.sign(data, SECRETKEY);
    return token;
  }
  else {
    throw Error('Invalid email/password');
  }

}

module.exports = {
  login
};
