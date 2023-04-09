var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const productsRouter = require('./routes/productos');
app.use('/productos', productsRouter);
const headerLogeadoRouter = require('./routes/header-logeado');
const homeRouter = require('./routes/home');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const productaddRouter = require('./routes/product-add');
const productRouter = require('./routes/products');
const profileeditRouter = require('./routes/profile-add');
const profileRouter = require('./routes/profile');
const registerRouter = require('./routes/register');
const searchresultsRouter = require('./routes/search-result');

app.use('/headerLogeado', headerLogeadoRouter);
app.use('/home', homeRouter);
app.use('index', indexRouter);
app.use('/login', loginRouter);
app.use('/product-add', productaddRouter);
app.use('/product', productRouter);
app.use('/profile-edit', profileeditRouter);
app.use('/profile', profileRouter);
app.use('/register', registerRouter);
app.use('/search-results', searchresultsRouter);





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
