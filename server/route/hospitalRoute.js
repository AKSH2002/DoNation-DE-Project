var express = require('express');
var hospitalController = require('../controllers/hospitalController.js');
const router = express.Router();

router.post('/signup', hospitalController.hospitalSignup);

module.exports = router;