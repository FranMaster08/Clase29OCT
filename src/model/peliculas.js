const db = require('../database/models')
const peliculasModel = {
  getAll: async function () {
    return await db.actores.findAll();
  },
  getPelicula: async function (nombre) {
    return this.getAll.filter((item) => item.name === nombre);
  },
  createPelicula: async function (pelicula){
    return true;
  },
  updatePelicula: async function (id,pelicula){
    return true;
  },
  deletePelicula: async function (id){
      return true;
  }
};
module.exports = peliculasModel;