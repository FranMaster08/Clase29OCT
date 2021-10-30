const express = require('express');
const routes = express.Router();
const {countries} = require('../controller')

routes.get('/allCountries',countries.getAll)
routes.get('/getCountry/:nombre',countries.getCountry)

module.exports = routes;