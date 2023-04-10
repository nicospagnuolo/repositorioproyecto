var express = require('express');
var router = express.Router();

const controller = require('../controllers/users')
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  router.get('/show',indexController.show );
  router.get('/edit',indexController.edit );
  router.get('/profile',indexController.index );
  router.get('/create',indexController.create );
});

module.exports = router;
