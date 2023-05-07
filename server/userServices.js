var userModel = require('./models/userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var userModelData = new userModel();

       userModelData.First_Name = userDetails.First_Name;
       userModelData.Last_Name = userDetails.Last_Name;
       userModelData.Date_Of_Birth = userDetails.Date_Of_Birth;
       userModelData.Blood_Group = userDetails.Blood_Group;
       userModelData.Whatsapp_Number = userDetails.Whatsapp_Number;
       userModelData.Gender = userDetails.Gender;
       userModelData.Last_Donation_Date = userDetails.Last_Donation_Date;
       userModelData.Email_Id = userDetails.Email_Id;
       userModelData.Address = userDetails.Address;
       userModelData.State = userDetails.State;
       userModelData.City = userDetails.City;
       userModelData.Pincode = userDetails.Pincode;
       userModelData.password = userDetails.password;
       var encrypted = encryptor.encrypt(userDetails.password);
       userModelData.password = encrypted;

       userModelData.save(function resultHandle(error, result) {

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