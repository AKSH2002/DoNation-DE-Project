var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSchema = new Schema({

    Hospital_Name: {
        type: String,
        required: true
    },
    Hospital_Department_Name: {
        type: String,
        required: true
    },
    Hospital_Category: {
        type: String,
        required: true
    },
    Hospital_Registration_Number: {
        type: String,
        required: true
    },
    Starting_Date: {
        type: Date,
        required: true
    },
    Expiring_Date: {
        type: Date,
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
    District: {
        type: String,
        required: true
    },
    Sub_District: {
        type: String,
        required: true
    },
    Town: {
        type: String,
        required: true
    },
    Village: {
        type: String,
        required: true
    },
    Pin_Code: {
        type: Number,
        required: true
    },
    Contact_No: {
        type: String,
        required: true
    },
    Emergency_Number: {
        type: Number,
        required: true
    },
    Ambulance_No: {
        type: Number,
        required: true
    },
    Blood_Bank_No: {
        type: Number,
        required: true
    },
    Helpline_No: {
        type: Number,
        required: true
    },
    Hospital_Email: {
        type: String,
        required: true
    },
    Website_link: {
        type: String,
        required: true
    },
    Established_Year: {
        type: Number,
        required: true
    },
    Contact_Person: {
        type: String,
        required: true
    },
    Contact_Person_Number: {
        type: Number,
        required: true
    },
    Contact_Person_Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

HospitalModel = mongoose.model("HospitalModel",hospitalSchema, 'hospitals');

module.exports=HospitalModel;