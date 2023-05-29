var express = require('express');
var router = express.Router();

const productscontroller = require('../controllers/productscontroller')

router.get('/', productscontroller.index);
router.get('/product/id/:id', productscontroller.findByPk);
router.get('/product-add', productscontroller.add);

module.exports = router;