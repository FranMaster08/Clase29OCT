const express = require('express');
const routes = express.Router();
const {peliculas} = require('../controller')

routes.get('/allMovies',peliculas.getAll)
routes.get('/getMovie/:id',peliculas.getPelicula)
routes.post('/Movie',peliculas.createPelicula)
routes.put('/Movie/:id',peliculas.updatePelicula)
routes.delete('/Movie/:id',peliculas.deletePelicula)


module.exports = routes;