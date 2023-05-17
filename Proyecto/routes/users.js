var express = require('express');
var router = express.Router();

const indexController = require('../controllers/users')
  router.get('/users/id/:id',indexController.index) ;
  router.get('/login',indexController.login );
  router.get('/profileedit',indexController.profileedit );
  router.get('/register',indexController.register );
;

module.exports = router;