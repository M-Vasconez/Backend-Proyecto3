'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('juegos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temporada: {
        type: Sequelize.INTEGER
      },
      semana: {
        type: Sequelize.INTEGER
      },
      id_estadio: {
        type: Sequelize.INTEGER
      },
      equipo1_id: {
        type: Sequelize.INTEGER
      },
      puntaje_equipo1: {
        type: Sequelize.INTEGER
      },
      equipo2_id: {
        type: Sequelize.INTEGER
      },
      puntaje_equipo2: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('juegos');
  }
};