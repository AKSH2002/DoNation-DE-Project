var express = require('express');
var bloodBankController = require('../controllers/bloodBankController.js');
const router = express.Router();

router.post('/signup', bloodBankController.bloodBankSignup);
router.post('/signin', bloodBankController.bloodBankSignin);

module.exports = router;