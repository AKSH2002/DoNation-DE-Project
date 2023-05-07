var express = require('express');
var userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/signup', userController.userSignup);
router.post('/signin', userController.userSignin);

module.exports = router;