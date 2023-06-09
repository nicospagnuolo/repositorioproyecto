var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersControllers');

router.get('/profile', usersController.profile)
router.get('/register', usersController.add)
router.post('/register', usersController.store)
router.get('/login',usersController.login)
router.post('/login',usersController.ingresar)
router.post('/logout',usersController.logout)

module.exports = router;