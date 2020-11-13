/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */
var express = require('express');
var router = express.Router();
const expbhs = require ('express-handlebars');



router.get('/', function(req, res, next) {
    res.render('gasta', { page: 'gasta',menuId: 'gasta' });
  });

  

module.exports = router;

