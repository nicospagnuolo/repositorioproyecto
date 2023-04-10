var express = require('express');
var router = express.Router();

const indexController = require('../controllers/controllerProduct')

router.get('/',indexController.index );
router.get('/product-add',indexController.index );
router.get('/search-result',indexController.index );




module.exports = router;