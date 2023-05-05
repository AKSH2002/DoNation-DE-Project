var bloodBankModel = require('./models/bloodBankModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createBloodBankDBService = (bloodBankDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var bloodBankModelData = new bloodBankModel();

       bloodBankModelData.Blood_Bank_Name = bloodBankDetails.Blood_Bank_Name;
       bloodBankModelData.State = bloodBankDetails.State;
       bloodBankModelData.District = bloodBankDetails.District;
       bloodBankModelData.City = bloodBankDetails.City;
       bloodBankModelData.Address = bloodBankDetails.Address;
       bloodBankModelData.Pincode = bloodBankDetails.Pincode;
       bloodBankModelData.Nodal_Officer = bloodBankDetails.Nodal_Officer;
       bloodBankModelData.Contact_Nodal_Officer = bloodBankDetails.Contact_Nodal_Officer;
       bloodBankModelData.Email_Nodal_Officer = bloodBankDetails.Email_Nodal_Officer;
       bloodBankModelData.Helpline = bloodBankDetails.Helpline;
       bloodBankModelData.Category = bloodBankDetails.Category;
       bloodBankModelData.License_No = bloodBankDetails.License_No;
       bloodBankModelData.Date_License_Obtained = bloodBankDetails.Date_License_Obtained;
       bloodBankModelData.Date_of_Renewal = bloodBankDetails.Date_of_Renewal;
       bloodBankModelData.password = bloodBankDetails.password;
       var encrypted = encryptor.encrypt(bloodBankDetails.password);
       bloodBanktModelData.password = encrypted;

       bloodBankModelData.save(function resultHandle(error, result) {

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