/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var InitiateMongoServer = require("./config/db");
var bodyParser = require('body-parser');
var dbMongo = require('./config/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var acercadeRouter = require ('./routes/acercade');
var ubicacionRouter = require ('./routes/ubicacion')
var redesRouter = require('./routes/redes');
var otraRouter = require('./routes/otra');
var stRouter = require('./routes/st');
var gastaRouter = require('./routes/gasta');
var registroRouter = require('./routes/registro');
var yaRouter = require('./routes/ya');
var nohayRouter= require('./routes/nohay');

var MethodOverride = require('method-override');
var session = require('express-session');
const flash  = require('connect-flash');
const passport = require('passport');


var app = express();

//inicializacion de la base de datos
InitiateMongoServer();
app.use(bodyParser.json());//convierte el dato a formato JSON
require('./config/db');
require('./config/passport')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(MethodOverride('_method'));
app.use(session({
    secret: 'appsecreta',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/acercade',acercadeRouter);
app.use ('/ubicacion',ubicacionRouter);
app.use('/redes',redesRouter);
app.use('/otra',otraRouter);
app.use('/st',stRouter);
app.use('/gasta',gastaRouter);
app.use('/registro',registroRouter);
app.use('/ya',yaRouter);
app.use('/nohay',nohayRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
