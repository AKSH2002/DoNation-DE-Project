const BloodBankModel  = require('../models/bloodBankModel.js');

const bloodBankSignup = async (req, res) => {
    try {
        const { body } = req;
        const newBloodBankRecord = await BloodBankModel.create(body);
        res.status(200).json({
          success: true,
          bloodBankRecord: newBloodBankRecord,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Failed to create blood bank record',
        });
      }
}

module.exports = { bloodBankSignup };

// module.exports = { createBloodBankControllerFn,loginBloodBankControllerFn };