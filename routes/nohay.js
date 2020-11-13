/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nohay', { page: 'nohay',menuId: 'nohay' });
});

module.exports = router;
