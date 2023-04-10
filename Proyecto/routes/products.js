var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerProduct')

router.get('/',indexController.index );
router.get('/product-add',indexController.create );
router.get('/results',indexController.results );




module.exports = router;