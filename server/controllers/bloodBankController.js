const BloodBankModel = require('../models/bloodBankModel.js');
const jwt = require("jsonwebtoken");

const bloodBankSignin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const secret = "thebloodbank";
  try {
    const oldBloodBank = await BloodBankModel.findOne({ Email_Nodal_Officer: email });
    if (!oldBloodBank)
      return res.status(404).json({ message: "BloodBank doesn't exist" });

    if (oldBloodBank.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: oldBloodBank.Email_Nodal_Officer, id: oldBloodBank._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldBloodBank, token, message: 'Login Successfull', status: 200 });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", status: 500 });
  }
};

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

module.exports = { bloodBankSignin, bloodBankSignup };

// module.exports = { createBloodBankControllerFn,loginBloodBankControllerFn };