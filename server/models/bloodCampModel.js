var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloodCampSchema = new Schema({

    Organization_Name: {
        type: String,
        required: true
    },
    Organization_Type: {
        type: String,
        required: true
    },
    Organizer_Name: {
        type: String,
        required: true
    },
    Organizer_Mobile_Number: {
        type: Number,
        required: true
    },
    Organizer_Email: {
        type: String,
        required: true
    },
    Co_Organizer_Name: {
        type: String,
        required: true
    },
    Co_Organizer_Mobile_Number: {
        type: Number,
        required: true
    },
    Camp_Name: {
        type: String,
        required: true
    },
    Camp_Address: {
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
    City_Name: {
        type: String,
        required: true
    },
    Blood_Bank: {
        type: String,
        required: true
    },
    Camp_Propose_Date: {
        type: Date,
        required: true
    },
    Starting_Time: {
        type: String,
        required: true
    },
    Ending_Time: {
        type: String,
        required: true
    },
    Latitude: {
        type: String,
        required: true
    },
    Longitude: {
        type: String,
        required: true
    },
    Estimated_Participants: {
        type: Number,
        required: true
    },
    Camp_Supporter: {
        type: String,
        required: true
    },
    Remark: {
        type: String,
        required: true
    },

});

BloodCampModel = mongoose.model("BloodCampModel",bloodCampSchema, 'bloodCamps');

module.exports=BloodCampModel;