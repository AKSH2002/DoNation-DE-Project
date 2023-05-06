const hospitalModel  = require('../models/hospitalModel.js');

const hospitalSignup = async (req, res) => {
    try {
        const { body } = req;
        const newHospitalRecord = await hospitalModel.create(body);
        res.status(200).json({
          success: true,
          hospitalRecord: newHospitalRecord,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Failed to create hospital record',
        });
      }
}

module.exports = { hospitalSignup };