/*
 ____    _    ____  _____ _   _ 
|  _ \  / \  |  _ \| ____| \ | |
| | | |/ _ \ | |_) |  _| |  \| |
| |_| / ___ \|  _ <| |___| |\  |
|____/_/   \_\_| \_\_____|_| \_|

 *	que aremos explicaremos cada linea de codigo de 
 *	esta platilla que nos genrea express 
 *	hay unas que veo que etiendo 
 *	otras que no 
 * */

// primero cosa que veo que ocupa var y no const 
var createError = require('http-errors');
var express = require('express'); // importamso express framwork 
var path = require('path');// esta apra naavegar por rutas 
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // hacemos como que la instancia 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); // esta es apra los datos sean de json a objto js 
app.use(express.urlencoded({ extended: false }));// igual que lso json se transofrmen a objtos pero veo qeu esta en false no entiendo por  que ¿? 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // hace referecnaia adonde esta la carpeta public que ahi llacen lso archivos staticos 
// dir name es la ubicacion actual path join los junta con la carpeta static 
// ubicacion actual + public 
// y static es un midleware que devuelve archivos staticos 

app.use('/', indexRouter); 
app.use('/users', usersRouter);

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
