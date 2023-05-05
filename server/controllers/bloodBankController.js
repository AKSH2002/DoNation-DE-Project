var bloodBankServices = require('../bloodBankServices.js');

var createBloodBankControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await bloodBankServices.createBloodBankDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Blood Bank registrateration successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

// export const getPosts = (req,res) => {
//     try{
//         const BloodBankSchema.find();
//     }
//     catch(error){

//     }
// }

// var loginBloodBankControllerFn = async (req, res) => {
//     var result = null;
//     try {
//         result = await bloodBankServices.loginBloodBankDBService(req.body);
//         if (result.status) {
//             res.send({ "status": true, "message": result.msg });
//         } else {
//             res.send({ "status": false, "message": result.msg });
//         }

//     } catch (error) {
//         console.log(error);
//         res.send({ "status": false, "message": error.msg });
//     }
// }

module.exports = { createBloodBankControllerFn};

// module.exports = { createBloodBankControllerFn,loginBloodBankControllerFn };