const UserModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

const userSignin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const secret = "thebloodbank";
  try {
    const oldUser = await UserModel.findOne({ Email_Id: email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    if (oldUser.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: oldUser.Email_Id, id: oldUser._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldUser, token, message: 'Login Successfull', status: 200 });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", status: 500 });
  }
};

const userSignup = async (req, res) => {
  try {
    const { body } = req;
    const newUserRecord = await UserModel.create(body);
    res.status(200).json({
      success: true,
      userRecord: newUserRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create user record",
    });
  }
};

module.exports = { userSignin, userSignup };

// module.exports = { createBloodBankControllerFn,loginBloodBankControllerFn };
