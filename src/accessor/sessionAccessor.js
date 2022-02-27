const { Sessions } = require('../db/models/sessions');

function createNewSession(userId, jwt, cb) {
    const session = new Sessions({ user_id: userId, jwt: jwt });
    session.save(cb);
}

function deleteSession(userId, cb) {
    Sessions.deleteOne({ user_id: userId }, cb);
}

function findSessionByJwt(jwt, cb) {
    Sessions.findOne({ jwt: jwt }, cb);
}

module.exports = {
    createNewSession,
    deleteSession,
    findSessionByJwt
};