var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersControllers');

router.get('/', usersController.add)
router.post('/register', usersController.store)


module.exports = router;