var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    },
    Date_Of_Birth: {
        type: Date,
        required: true
    },
    Blood_Group: {
        type: String,
        required: true
    },
    Whatsapp_Number: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Last_Donation_Date: {
        type: Date,
        required: true
    },
    Email_Id: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Pincode: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

UserModel = mongoose.model("UserModel",userSchema, 'users');

module.exports=UserModel;