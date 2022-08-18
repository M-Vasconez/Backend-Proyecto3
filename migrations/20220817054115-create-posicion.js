'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posicions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temporada: {
        type: Sequelize.INTEGER
      },
      posicion: {
        type: Sequelize.INTEGER
      },
      equipo_id: {
        type: Sequelize.INTEGER
      },
      equipo: {
        type: Sequelize.STRING
      },
      jugados: {
        type: Sequelize.INTEGER
      },
      ganados: {
        type: Sequelize.INTEGER
      },
      perdidos: {
        type: Sequelize.INTEGER
      },
      empates: {
        type: Sequelize.INTEGER
      },
      puntos: {
        type: Sequelize.INTEGER
      },
      division_id: {
        type: Sequelize.INTEGER
      },
      division: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('posicions');
  }
};