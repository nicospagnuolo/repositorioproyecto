var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerIndex')

/* GET home page. */
router.get('/',controllerIndex.index );

module.exports = router;
