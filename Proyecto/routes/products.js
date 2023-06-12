var express = require('express');
var router = express.Router();

const productscontroller = require('../controllers/productscontroller')

router.get('/product', productscontroller.index);
router.get('/product-edit/:id', productscontroller.editproduct)
router.get('/product/:id', productscontroller.findByPk);
router.get('/product-add', productscontroller.add);
router.post('/product-add',productscontroller.store)
router.post('/product-add',productscontroller.comentario)
router.post('/update/:id',productscontroller.update)
router.get('/update/:id',productscontroller.actualizar)
router.post('/delete',productscontroller.delete)
module.exports = router;