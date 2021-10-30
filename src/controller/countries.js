const { countries } = require("../model");
const countriesController = {
  getAll: async function (req, res, next) {
    try {
      const result = await countries.getAll();
      res.status(200).json({ data: result, error: null, succes: true });
    } catch (error) {
      res.status(500).json({ data: null, error: error, succes: false });
    }
  },
  getCountry: async function (req, res, next) {
    try {
        const { nombre } = req.params; 
        const result = await countries.getCountry(nombre);
        res.status(200).json({ data: result, error: null, succes: true });
    } catch (error) {
        res.status(500).json({ data: null, error: error, succes: false });
    }
  },
};
module.exports = countriesController;
