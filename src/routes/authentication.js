const express = require('express');
const Router = express.Router();
const AuthenticationHandler = require('../handlers/authenticationHandler');

Router.post('/login', AuthenticationHandler.login);

module.exports = Router;
