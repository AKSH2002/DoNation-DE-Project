const hospitalModel  = require('../models/hospitalModel.js');
const jwt = require("jsonwebtoken");

const hospitalSignin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const secret = "thebloodbank";
  try {
    const oldHospital = await hospitalModel.findOne({ Hospital_Email: email });
    if (!oldHospital)
      return res.status(404).json({ message: "Hospital doesn't exist" });

    if (oldHospital.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: oldHospital.Hospital_Email, id: oldHospital._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldHospital, token, message: 'Login Successfull', status: 200 });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", status: 500 });
  }
};

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

module.exports = { hospitalSignin, hospitalSignup };