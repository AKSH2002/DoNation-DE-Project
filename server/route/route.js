var express = require('express');

var bloodBankController = require('../controllers/bloodBankController.js');
const router = express.Router();

// import { getPosts } from '../controllers/bloodBankController.js'

// var getPosts = require('../controllers/bloodBankController.js');

// router.route('/bloodbank/login').post(bloodBankController.loginBloodBankControllerFn);

router.route('/bloodbank/login', function(req, res){
    post(bloodBankController.loginBloodBankControllerFn)
  });
// router.route('/bloodbank/create').post(bloodBankController.createBloodBankControllerFn);
router.route('/bloodbank/blood-bank-signup', function(req, res){
    // res.send('this works');
    post(bloodBankController.createBloodBankControllerFn)
  });

// router.get('/',getPosts);

module.exports = router;