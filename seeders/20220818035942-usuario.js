//var faker = require("faker");
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const lista_equipos = [1,2,3,4,5,6,7,8,9];
    const fecha = new Date();

    for (let i = 0; i < 3000; i++){
      await queryInterface.bulkInsert('usuarios', [{ 
        // nombre: faker.name.firstName(),
        // apellido: faker.name.lastName(),
        // email: faker.internet.email(),
        // password: faker.internet.password(),
        // equipo_id: lista_equipos[Math.floor(Math.random() * 9)],
        // createdAt: fecha,  
        // updatedAt: fecha,  
      }], {}); 
  } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});  
  }
};
