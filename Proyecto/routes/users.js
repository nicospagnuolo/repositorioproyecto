var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  router.get('/login',indexController.index );
  router.get('/profile-add',indexController.index );
  router.get('/profile',indexController.index );
  router.get('/register',indexController.index );
});

module.exports = router;
