var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerHome')

router.get('/',controllerHome.index );

module.exports = router;