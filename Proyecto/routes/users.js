var express = require('express');
var router = express.Router();

const indexController = require('../controllers/users')
  router.get('/',indexController.index) ;
  router.get('/show',indexController.show );
  router.get('/edit',indexController.edit );
  router.get('/profile',indexController.index );
  router.get('/register',indexController.register );
;

module.exports = router
