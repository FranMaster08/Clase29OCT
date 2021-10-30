const express = require('express');
const routes = express.Router();

routes.use('/movies',require('./api'))
routes.use('/countries',require('./apicountries'))

module.exports = routes;