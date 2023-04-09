var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerLogin')

router.get('/',controllerLogin.index );

module.exports = router;