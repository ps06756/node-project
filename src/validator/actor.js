function validateActorId(req, res, next) {
    const actorId = req.params.actorId;
    if(actorId != 1) {
        next();
    }
    else {
        res.status(400).send('Bad Actor Id');
    }
}

module.exports = {
    validateActorId
}