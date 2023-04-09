var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerRegister')

router.get('/',register.index );

module.exports = router;