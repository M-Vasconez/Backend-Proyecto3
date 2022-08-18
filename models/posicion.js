'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posicion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  posicion.init({
    temporada: DataTypes.INTEGER,
    posicion: DataTypes.INTEGER,
    equipo_id: DataTypes.INTEGER,
    equipo: DataTypes.STRING,
    jugados: DataTypes.INTEGER,
    ganados: DataTypes.INTEGER,
    perdidos: DataTypes.INTEGER,
    empates: DataTypes.INTEGER,
    puntos: DataTypes.INTEGER,
    division_id: DataTypes.INTEGER,
    division: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posicion',
  });
  return posicion;
};