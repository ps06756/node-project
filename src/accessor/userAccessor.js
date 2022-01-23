const { UserRoles } = require('../constants/user');

const dummyData = [
  {
    'email': 'ps06@gmail.com',
    'password': 'hello1',
    'role': UserRoles.Admin
  },
  {
    'email': 'adharsh@gmail.com',
    'password': 'hello2',
    'role': UserRoles.Student
  }
];

function getUserByEmail(email) {
  for(let i = 0; i < dummyData.length; i++) {
    if (dummyData[i].email === email) {
      return dummyData[i];
    }
  }
  return undefined;
}

module.exports = {
  getUserByEmail
};
