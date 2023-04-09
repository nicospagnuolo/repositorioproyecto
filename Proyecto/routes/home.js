var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerHome')

router.get('/',indexController.index );

module.exports = router;