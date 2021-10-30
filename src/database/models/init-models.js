var DataTypes = require("sequelize").DataTypes;
var _ActoresInPeliculas = require("./ActoresInPeliculas");
var _actores = require("./actores");
var _categorias = require("./categorias");
var _peliculas = require("./peliculas");

function initModels(sequelize) {
  var ActoresInPeliculas = _ActoresInPeliculas(sequelize, DataTypes);
  var actores = _actores(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var peliculas = _peliculas(sequelize, DataTypes);

  actores.belongsToMany(peliculas, { as: 'peliculasId_peliculas', through: ActoresInPeliculas, foreignKey: "actoresId", otherKey: "peliculasId" });
  peliculas.belongsToMany(actores, { as: 'actoresId_actores', through: ActoresInPeliculas, foreignKey: "peliculasId", otherKey: "actoresId" });
  ActoresInPeliculas.belongsTo(actores, { as: "actore", foreignKey: "actoresId"});
  actores.hasMany(ActoresInPeliculas, { as: "actoresinpeliculas", foreignKey: "actoresId"});
  peliculas.belongsTo(categorias, { as: "categoria", foreignKey: "categoriasId"});
  categorias.hasMany(peliculas, { as: "peliculas", foreignKey: "categoriasId"});
  ActoresInPeliculas.belongsTo(peliculas, { as: "pelicula", foreignKey: "peliculasId"});
  peliculas.hasMany(ActoresInPeliculas, { as: "actoresinpeliculas", foreignKey: "peliculasId"});

  return {
    ActoresInPeliculas,
    actores,
    categorias,
    peliculas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
