const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ActoresInPeliculas', {
    actoresId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'actores',
        key: 'id'
      }
    },
    peliculasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'peliculas',
        key: 'id'
      }
    },
    year: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ActoresInPeliculas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "actoresId" },
          { name: "peliculasId" },
        ]
      },
      {
        name: "fkactoreshaspeliculaspeliculas1idx",
        using: "BTREE",
        fields: [
          { name: "peliculasId" },
        ]
      },
      {
        name: "fkactoreshaspeliculasactores1idx",
        using: "BTREE",
        fields: [
          { name: "actoresId" },
        ]
      },
    ]
  });
};
