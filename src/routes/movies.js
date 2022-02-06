const express = require('express');
const router = express.Router();
const MovieHandler = require('../handlers/movie');

router.post('/', MovieHandler.addNewMovie)

module.exports = router;
