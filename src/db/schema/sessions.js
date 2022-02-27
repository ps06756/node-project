const mongoose = require('mongoose');
const { Schema } = mongoose;

const SessionSchema = new Schema({
    user_id: String,
    jwt: String,
});

module.exports = {
    SessionSchema
};