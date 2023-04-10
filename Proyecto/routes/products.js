var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerProduct')

router.get('/',indexController.index );
router.get('/create',indexController.create );
router.get('/results',indexController.results );




module.exports = router;