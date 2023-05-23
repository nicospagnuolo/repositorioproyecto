var express = require('express');
var router = express.Router();

const productscontroller = require('../controllers/productscontroller')

router.get('/', productscontroller.index);
router.get('/product', productscontroller.detalle);
router.get('/product-add', productscontroller.add);

module.exports = router;