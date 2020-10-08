const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login/create', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
}),LoginController.create);

routes.post('/login/session', LoginController.session);
routes.get('/login/all', LoginController.index);

module.exports = routes;