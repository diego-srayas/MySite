/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('otra', { page: 'otra',menuId: 'otra' });
  
  });





  module.exports = router;