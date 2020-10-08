const express = require('express');

const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login/create', LoginController.create);
routes.post('/login/session', LoginController.session);
routes.get('/login/all', LoginController.index);

module.exports = routes;