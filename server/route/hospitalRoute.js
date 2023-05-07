var express = require('express');
var hospitalController = require('../controllers/hospitalController.js');
const router = express.Router();

router.post('/signup', hospitalController.hospitalSignup);
router.post('/signin', hospitalController.hospitalSignin);

module.exports = router;