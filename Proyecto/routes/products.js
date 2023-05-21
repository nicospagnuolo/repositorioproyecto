var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/product', productsController.detalle);
router.get('/product-add', productsController.add);

module.exports = router;