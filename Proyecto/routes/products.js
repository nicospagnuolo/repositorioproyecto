var express = require('express');
var router = express.Router();

const productscontroller = require('../controllers/productscontroller')

router.get('/', productscontroller.index);
router.get('/product/:id', productscontroller.detalle);
router.get('/product-add', productscontroller.add);
router.post('/product-add',productscontroller.store)

module.exports = router;