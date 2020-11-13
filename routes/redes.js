/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */

var express = require('express');
var router = express.Router();
const Instgram = require('node-instagram')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('redes', { page: 'redes',menuId: 'redes' });
});





module.exports = router;
