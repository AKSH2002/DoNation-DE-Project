var express = require('express');
var bloodCampController = require('../controllers/bloodCampController.js');
const router = express.Router();

router.post('/signup', bloodCampController.bloodCampSignup);

module.exports = router;