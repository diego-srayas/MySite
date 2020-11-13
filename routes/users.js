var express = require('express');
var router = express.Router();
/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */

const User = require('../models/user');
const passport = require('passport');

/* GET users listing. */
router.get('/nohay', (req, res) => {
  res.render('nohay');
        });

router.get('/registro', (req, res) => {
res.render('registro');
      });


      router.post('/registro', passport.authenticate('local', {
        successRedirect: '/ya',
      
        failureRedirect: 'registro',
        failureFlash: false
      }));

router.post('/nohay', async (req, res) => {
  const {name, email, pass, pass_c} = req.body;
  const errors = [];

  if(name.length <= 0) {
   errors.push({text: 'Por favor introducir su nombre'});
  }

  if(pass != pass_c) {
  errors.push({text: 'Las contraseñas no coinciden'});
  }

  if(pass.length < 4) {
  errors.push({text: 'La contraseña debe tener al menos 4 caracteres'});
  }

  if(errors.length > 0) {
  res.render('nohay',  {errors, name, email, pass, pass_c});

  } else {
    const emailUser = await User.findOne({email: email});
    if(emailUser) {
	req.flash('error_msg', 'El email ya esta registrado');
	res.redirect('/users/nohay');
	}

      const newUser = new User({name, email, pass});
      newUser.pass = await newUser.encryptPassword(pass);
      await newUser.save();
      req.flash('success_msg', 'Bienvenido al lado oscruro');
      res.redirect('/registro');
  }

  });

module.exports = router;


