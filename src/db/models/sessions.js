const mongoose = require('mongoose');
const SessionSchema = require('../schema/sessions').SessionSchema;

const Sessions = mongoose.model('sessions', SessionSchema);

module.exports = {
  Sessions
};
