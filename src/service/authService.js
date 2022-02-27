const jwt = require('jsonwebtoken');
const UserAccessor = require('../accessor/userAccessor');
const SessionAccessor = require('../accessor/sessionAccessor');

const SECRETKEY = 'asfsdfdffeewrrer';

// function login(email, password) {
//   let user = UserAccessor.getUserByEmail(email);
//   if (typeof user === 'undefined') {
//     throw Error('Invalid email/password');
//   }
//   else if (user.password === password) {
//     let data = {
//       email: email,
//       role: user.role
//     };
//     const token = jwt.sign(data, SECRETKEY);
//     return token;
//   }
//   else {
//     throw Error('Invalid email/password');
//   }

// }

function login(email, password, cb) {
  UserAccessor.findUserByEmail(email, function(err, user) {
    if (typeof err !== 'undefined' && err !== null) {
      console.log(`Some error occured ${err}`);
      cb(err);
    }
    else {
      if (user.password === password) {
        let data = {
          email: email,
        };
        const token = jwt.sign(data, SECRETKEY);
        SessionAccessor.createNewSession(email, token, function(err) {
          if (typeof err != 'undefined' && err !== null) {
            if (err.code ===  11000) {
              cb('You are already logged in, cannot login again!');
            }
            else {
              cb(err);
            }
          }
          else {
            cb(undefined, token);
          }
        });
      }
      else {
        cb('Password does not match!');
      }
    }
  })
}

function logout(email, cb) {
  SessionAccessor.deleteSession(email, function(err, response) {
    if (typeof error != 'undefined' && err !== null) {
      cb(err);
    }
    else {
      cb();
    }
  });
}

module.exports = {
  login,
  logout
};
