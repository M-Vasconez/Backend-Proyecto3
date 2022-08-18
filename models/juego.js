'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  juego.init({
    temporada: DataTypes.INTEGER,
    semana: DataTypes.INTEGER,
    id_estadio: DataTypes.INTEGER,
    equipo1_id: DataTypes.INTEGER,
    puntaje_equipo1: DataTypes.INTEGER,
    equipo2_id: DataTypes.INTEGER,
    puntaje_equipo2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'juego',
  });
  return juego;
};