const BloodCampModel  = require('../models/bloodCampModel.js');

const bloodCampSignup = async (req, res) => {
    try {
        const { body } = req;
        const newBloodCampRecord = await BloodCampModel.create(body);
        res.status(200).json({
          success: true,
          bloodCampRecord: newBloodCampRecord,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Failed to create blood camp record',
        });
      }
}

module.exports = { bloodCampSignup };