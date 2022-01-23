const ActorService = require('../service/actor');

function addNewActor(req, res) {
    res.send('Tryng to add a new actor');
}

function deleteActor(req, res) {
    const actorId = req.params['actorId'];
    ActorService.deleteActor(actorId);
    res.send('Trying to delete an actor');
}

function updateActor(req, res) {
    res.send('Trying to update an actor');
}

function getActor(req, res) {
    res.send('Trying to get an actor');
}

module.exports = {
    addNewActor,
    deleteActor,
    updateActor,
    getActor
}