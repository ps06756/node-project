const express = require('express');
const router = express.Router();
const ActorHandlers = require('../handlers/actor');
const ActorValidators = require('../validator/actor');
const { checkIfAuthenticated } = require('../middleware/authentication');
const { checkIfAuthorized } = require('../middleware/authorization');
const { UserRoles } = require('../constants/user');

router.get('/:actorId', checkIfAuthenticated, checkIfAuthorized([UserRoles.Admin, UserRoles.Student]), ActorValidators.validateActorId, ActorHandlers.getActor)

router.put('/:actorId', ActorHandlers.updateActor)

router.post('/', ActorHandlers.addNewActor)

router.delete('/:actorId', ActorHandlers.deleteActor);

module.exports = router;
