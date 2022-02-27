const mongoose = require('mongoose');
const UserSchema = require('../schema/user').UserSchema;

const Users = mongoose.model('users', UserSchema);

module.exports = {
  Users
};
