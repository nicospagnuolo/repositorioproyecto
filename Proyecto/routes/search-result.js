var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerSearchresult')

router.get('/',searchresult.index );

module.exports = router;