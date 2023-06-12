var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersControllers');

router.get('/profile/:id', usersController.profile)
router.get('/profile-edit/:id', usersController.editprofile)
router.post('/profile-edit/:id', usersController.edit)
router.get('/register', usersController.add)
router.post('/register', usersController.store)
router.get('/login',usersController.login)
router.post('/login',usersController.ingresar)
router.post('/logout',usersController.logout)
router.post('/update/:id',usersController.update)
router.get('/update/:id',usersController.actualizar)

module.exports = router;