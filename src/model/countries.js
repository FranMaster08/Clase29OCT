const fetch = require("node-fetch");
const countriesModel = {
  getAll:  async function () {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
        timeout: 4000
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.log('Ocurrio  un error: ' + error.message)
      throw 'Ocurrio  un error: ' + error.message
    }
   
 
  },
  getCountry: async function  (nombre) {
    try {
      const paises = await this.getAll()
     return paises.find(item=>item.name.common.toLowerCase().includes(nombre.toLowerCase()))
    } catch (error) {
      console.log(`Ocurrio  un error buscando el pais:${nombre}  , error:  ${error.message}`)
      throw `Ocurrio  un error buscando el pais:${nombre}  , error:  ${error.message}`
    }
    
  },
};
module.exports = countriesModel;
