var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerProfileedit')

router.get('/',indexController.index );

module.exports = router;