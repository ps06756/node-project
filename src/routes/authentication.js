const express = require('express');
const Router = express.Router();
const AuthenticationHandler = require('../handlers/authenticationHandler');
const AuthenticationMiddleware = require('../middleware/authentication');

Router.post('/login', AuthenticationHandler.login);
Router.post('/logout', AuthenticationMiddleware.checkIfAuthenticated, AuthenticationHandler.logout);

module.exports = Router;
