var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerProfile')

router.get('/',profile.index );

module.exports = router;