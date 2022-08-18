'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const lista_equipos = [1,2,3,4,5,6,7,8,9];
    const fecha = new Date();
    for (let i = 1; i < 19; i++) {
      let shuffledArray = lista_equipos.sort((a, b) => 0.5 - Math.random());
      console.log("Esto es i: ",i);

      for (let j = 0; j < 8;j+=2){
          await queryInterface.bulkInsert('juegos', [{ 
          temporada: 2022,  
          semana: i,
          id_estadio:shuffledArray[j],
          equipo1_id:shuffledArray[j],
          puntaje_equipo1:Math.floor(Math.random() * 45),
          equipo2_id:shuffledArray[j+1],
          puntaje_equipo2:Math.floor(Math.random() * 45),
          createdAt: fecha,  
          updatedAt: fecha,  
          }], {}); 
      } 
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('juegos', null, {});  
  }
};
