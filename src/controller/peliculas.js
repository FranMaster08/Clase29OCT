const { peliculas } = require("../model");
const peliculasController = {
  getAll: function (req, res, next) {
    res.status(200).json(peliculas.getAll());
  },
  getPelicula: function (req, res, next) {
    const { id } = req.params;
    res.status(200).json(peliculas.getPelicula(id));
  },
  createPelicula: async function (req, res, next) {
    try {
      const body = req.body;
      const result = await peliculas.createPelicula(body);
      res.status(200).json({ data: result, error: null, succes: true });
    } catch (error) {
      res.status(500).json({ data: null, error: error, succes: false });
    }
  },
  updatePelicula: async function (req, res, next) {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await peliculas.updatePelicula(id, body);
      res.status(200).json({ data: result, error: null, succes: true });
    } catch (error) {
      res.status(500).json({ data: null, error: error, succes: false });
    }
  },
  deletePelicula: async function (req, res, next) {
    try {
      const { id } = req.params;
      const result = await peliculas.deletePelicula(id);
      res.status(200).json({ data: result, error: null, succes: true });
    } catch (error) {
      res.status(500).json({ data: null, error: error, succes: false });
    }
  },
};
module.exports = peliculasController;
