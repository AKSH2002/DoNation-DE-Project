const BloodCampModel  = require('../models/bloodCampModel.js');
// const jwt = require("jsonwebtoken");

// const bloodCampSignin = async (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const secret = "thebloodbank";
//   try {
//     const oldBloodCamp = await BloodCampModel.findOne({ Organizer_Email: email });
//     if (!oldBloodCamp)
//       return res.status(404).json({ message: "BloodCamp doesn't exist" });

//     if (oldBloodCamp.password !== password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }
//     const token = jwt.sign(
//       { email: oldBloodCamp.Organizer_Email, id: oldBloodCamp._id },
//       secret,
//       { expiresIn: "1h" }
//     );
//     res.status(200).json({ result: oldBloodCamp, token, message: 'Login Successfull', status: 200 });
//   } catch (err) {
//     res.status(500).json({ message: "Something went wrong", status: 500 });
//   }
// };

const bloodCampSignup = async (req, res) => {
    try {
        const { body } = req;
        const newBloodCampRecord = await BloodCampModel.create(body);
        res.status(200).json({
          success: true,
          bloodCampRecord: newBloodCampRecord,
        });
      } 
      catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Failed to create blood camp record',
        });
      }
}

module.exports = { bloodCampSignup };