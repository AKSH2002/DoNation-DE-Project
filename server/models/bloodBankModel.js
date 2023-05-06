var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloodBankSchema = new Schema({

    Blood_Bank_Name: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Pincode: {
        type: Number,
        required: true
    },
    Nodal_Officer: {
        type: String,
        required: true
    },
    Contact_Nodal_Officer: {
        type: String,
        required: true
    },
    Email_Nodal_Officer: {
        type: String,
        required: true
    },
    Helpline: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    License_No: {
        type: Date,
        required: true
    },
    Date_License_Obtained: {
        type: Date,
        required: true
    },
    Date_of_Renewal: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

BloodBankModel = mongoose.model("BloodBankModel",bloodBankSchema, 'bloodBanks');

module.exports=BloodBankModel;