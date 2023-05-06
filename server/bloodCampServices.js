var bloodCampModel = require('./models/bloodCampModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createBloodCampDBService = (bloodCampDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var bloodCampModelData = new bloodCampModel();

       bloodCampModelData.Organization_Name = bloodCampDetails.Organization_Name;
       bloodCampModelData.Organization_Type = bloodCampDetails.Organization_Type;
       bloodCampModelData.Organizer_Name = bloodCampDetails.Organizer_Name;
       bloodCampModelData.Organizer_Mobile_Number = bloodCampDetails.Organizer_Mobile_Number;
       bloodCampModelData.Organizer_Email = bloodCampDetails.Organizer_Email;
       bloodCampModelData.Co_Organizer_Name = bloodCampDetails.Co_Organizer_Name;
       bloodCampModelData.Co_Organizer_Mobile_Number = bloodCampDetails.Co_Organizer_Mobile_Number;
       bloodCampModelData.Camp_Name = bloodCampDetails.Camp_Name;
       bloodCampModelData.Camp_Address = bloodCampDetails.Camp_Address;
       bloodCampModelData.State = bloodCampDetails.State;
       bloodCampModelData.District = bloodCampDetails.District;
       bloodCampModelData.City_Name = bloodCampDetails.City_Name;
       bloodCampModelData.Blood_Bank = bloodCampDetails.Blood_Bank;
       bloodCampModelData.Camp_Propose_Date = bloodCampDetails.Camp_Propose_Date;
       bloodCampModelData.Starting_Time = bloodCampDetails.Starting_Time;
       bloodCampModelData.Ending_Time = bloodCampDetails.Ending_Time;
       bloodCampModelData.Latitude = bloodCampDetails.Latitude;
       bloodCampModelData.Longitude = bloodCampDetails.Longitude;
       bloodCampModelData.Estimated_Participants = bloodCampDetails.Estimated_Participants;
       bloodCampModelData.Camp_Supporter = bloodCampDetails.Camp_Supporter;
       bloodCampModelData.Remark = bloodCampDetails.Remark;

       bloodCampModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

// module.exports.loginBloodBankDBService = (bloodBankDetails)=> 
// {
//    return new Promise(function myFn(resolve, reject) 
//    {
//     bloodBankModel.findOne({ email: bloodBankDetails.email},function getresult(errorvalue, result)
//       {
//          if(errorvalue)
//          {
//             reject({status: false, msg: "Invaild Data"});
//          }
//          else
//          {
//             if(result !== undefined &&  result !== null)
//             {
//                var decrypted = encryptor.decrypt(result.password);

//                if(decrypted === bloodBankDetails.password)
//                {
//                   resolve({status: true,msg: "Blood Bank Validated Successfully"});
//                }
//                else
//                {
//                   reject({status: false,msg: "Blood Bank Validated failed"});
//                }
//             }
//             else
//             {
//                reject({status: false,msg: "Blood Bank Error Detailssss"});
//             }

//          }
      
//       });
      
//    });
// }