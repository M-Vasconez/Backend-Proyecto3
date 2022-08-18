var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const equipo = require('../models').equipo;  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/equipo', function(req, res, next) {
  	
    Producto.findAll({  
      attributes: { exclude: ["updatedAt"] }  
  })  
  .then(equipo => {  
      res.render('equipo', { title: 'My Dashboard :: Equipo', arrProductos: equipo });  
  })  
  .catch(error => res.status(400).send(error)) 
});



module.exports = router;
