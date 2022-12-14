const { raw } = require('express');
var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const { sequelize } = require('../models');
const Equipo = require('../models').equipo; 
const Posicion = require('../models').posicion;
const Usuario = require('../models').usuario;
const Juego = require('../models').juego;
const axios = require('axios');  


router.get('/equipos', function(req, res, next) {
  	
    Equipo.findAll({  
      attributes: { exclude: ["updatedAt","createdAt"] } 
  })  
  .then(equipos => {  
    res.json(equipos)
  })    
  .catch(error => res.status(400).send(error)) 
});

router.get('/equipos/:id', function(req, res, next) {
  
  Equipo.findOne({
    attributes: { exclude: ["updatedAt","createdAt"] },	
    where:{"id":req.params.id}
  })
  .then(equipos => {  
      res.json( equipos );  
  })  
.catch(error => res.status(400).send(error)) 
});

router.get('/posiciones', function(req, res, next) {
  	
  Posicion.findAll({  
    attributes: { exclude: ["updatedAt","createdAt"] }  
  })  
  .then(posiciones => {  
    res.json(posiciones)
  })    
  .catch(error => res.status(400).send(error)) 
  });

router.get('/posiciones/:temporada', function(req, res, next) {
  
  Posicion.findAll({
    attributes: { exclude: ["updatedAt","createdAt"] },
    where:{
      temporada:req.params.temporada},
    order:[ 
      ['division_id','asc'],
      ['posicion','asc']
    ]
  })
  .then(posiciones => {  
      res.json( posiciones );  
  })  
  .catch(error => res.status(400).send(error)) 
});

router.get('/usuarios', function(req, res, next) {
  	
  Usuario.findAll({  
    attributes: { exclude: ["updatedAt","createdAt"] }
})  
.then(usuarios => {  
  res.json(usuarios)
})    
.catch(error => res.status(400).send(error)) 
});

router.get('/usuarios/:id', function(req, res, next) {

Usuario.findOne({
  attributes: { exclude: ["updatedAt","createdAt"] },	
  where:{"id":req.params.id}
})
.then(usuario => {  
    res.json( usuario );  
})  
.catch(error => res.status(400).send(error)) 
});

// router.get('/juegos', function(req, res, next) {
//   Juego.findAll({  
//     attributes: { exclude: ["updatedAt","createdAt"] }
// })  
// .then(juegos => {  
//   res.json(juegos)
// })    
// .catch(error => res.status(400).send(error)) 
// });

router.get('/juegos', (req, res, next) => {

  axios.get(`https://proyecto3-986b7-default-rtdb.firebaseio.com/events.json`)
  .then( resAxios => {
      res.json(resAxios.data)
  })
  .catch(err => console.log(err))

});

// router.get('/juegos/:semana', function(req, res, next) {
//   Juego.findAll({  
//     attributes: { exclude: ["updatedAt","createdAt"] },
//     where:{"semana":req.params.semana}
// })  
// .then(juegos => {  
//   res.json(juegos)
// })    
// .catch(error => res.status(400).send(error)) 
// });

// router.get('/juegos/:equipo_id', function(req, res, next) {
//   const { Op } = require("sequelize");
//   Juego.findAll({  
//     attributes: { exclude: ["updatedAt","createdAt"] },
//     where:{
//       [Op.or] : [ {"equipo1_id": req.params.equipo_id},
//     {"equipo2_id": req.params.equipo_id} ]}
// })  
// .then(juegos => {  
//   res.json(juegos)
// })    
// .catch(error => res.status(400).send(error)) 
// });




module.exports = router;