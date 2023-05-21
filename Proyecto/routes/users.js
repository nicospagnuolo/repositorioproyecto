var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersControllers');

router.get('/profile', usersController.profile);
router.get('/editprofile', usersController.editprofile)


module.exports = router;