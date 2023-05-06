var hospitalModel = require('./models/hospitalModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createHospitalDBService = (hospitalDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var hospitalModelData = new hospitalModel();

       hospitalModelData.Hospital_Name = hospitalDetails.Hospital_Name;
       hospitalModelData.Hospital_Department_Name = hospitalDetails.Hospital_Department_Name;
       hospitalModelData.Hospital_Category = hospitalDetails.Hospital_Category;
       hospitalModelData.Hospital_Registration_Number = hospitalDetails.Hospital_Registration_Number;
       hospitalModelData.Starting_Date = hospitalDetails.Starting_Date;
       hospitalModelData.Expiring_Date = hospitalDetails.Expiring_Date;
       hospitalModelData.Address = hospitalDetails.Address;
       hospitalModelData.State = hospitalDetails.State;
       hospitalModelData.District = hospitalDetails.District;
       hospitalModelData.Sub_District = hospitalDetails.Sub_District;
       hospitalModelData.Town = hospitalDetails.Town;
       hospitalModelData.Village = hospitalDetails.Village;
       hospitalModelData.Pin_Code = hospitalDetails.Pin_Code;
       hospitalModelData.Contact_No = hospitalDetails.Contact_No;
       hospitalModelData.Emergency_Number = hospitalDetails.Emergency_Number;
       hospitalModelData.Ambulance_No = hospitalDetails.Ambulance_No;
       hospitalModelData.Blood_Bank_No = hospitalDetails.Blood_Bank_No;
       hospitalModelData.Helpline_No = hospitalDetails.Helpline_No;
       hospitalModelData.Hospital_Email = hospitalDetails.Hospital_Email;
       hospitalModelData.Website_link = hospitalDetails.Website_link;
       hospitalModelData.Established_Year = hospitalDetails.Established_Year;
       hospitalModelData.Contact_Person = hospitalDetails.Contact_Person;
       hospitalModelData.Contact_Person_Number = hospitalDetails.Contact_Person_Number;
       hospitalModelData.Contact_Person_Email = hospitalDetails.Contact_Person_Email;
       hospitalModelData.password = hospitalDetails.password;
       var encrypted = encryptor.encrypt(hospitalDetails.password);
       hospitaltModelData.password = encrypted;

       hospitalModelData.save(function resultHandle(error, result) {

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