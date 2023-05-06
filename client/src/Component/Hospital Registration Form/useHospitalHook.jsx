import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useHospitalHook = () => {
    const [postData, setPostData] = useState({
        hospitalName: "",
        departmentName: "",
        hospitalCategory: "",
        registrationNumber: "",
        startingDate: "",
        expiringDate: "",
        address: "",
        state: "",
        district: "",
        subDistrict: "",
        town: "",
        village: "",
        pinCode: "",
        mobileNumber: "",
        emergencyNumber: "",
        ambulanceNumber: "",
        bloodBankNumber: "",
        helplineNumber: "",
        primaryEmail: "",
        website: "",
        establishedSince: "",
        contactPerson: "",
        contactPersonNumber: "",
        nodalPersonNumber: "",
        nodalPersonEmail: "",
        password: "",
        confirmPassword: "",
      });

    const { mutate: RegisterHospitalData } = useMutation(
        async (payload) => {
          const res = await fetch(`http://localhost:8000/hospital/signup`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          return res;
        },
        {
          onSuccess: (res) => {
            if(res.status === 200){
              toast.success(res.statusText)
            }else{
              toast.error(res.statusText)
            }
          },
          onError: (err) => {
            toast.error(err.statusText)
          }
        }
      );

      const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
        //   Blood_Bank_Name: postData?.bloodBankName ?? '',
        //   State: postData?.state ?? '',
        //   District: postData?.district ?? '',
        //   City: postData?.city ?? '',
        //   Address: postData?.address ?? '',
        //   Pincode: postData?.pinCode ?? '',
        //   Nodal_Officer: postData?.contactPerson ?? '',
        //   Contact_Nodal_Officer: postData?.contactNumber ?? '',
        //   Email_Nodal_Officer: postData?.email ?? '',
        //   Helpline: postData?.helplineNumber ?? '',
        //   // Blood_Component_Available: postData?.,
        //   License_No: postData?.licenceNumber ?? '',
        //   Date_License_Obtained: postData?.licenceStartDate ?? '',
        //   Date_of_Renewal: postData?.licenceExpiryDate ?? '',
        //   Category: postData?.bloodBankCategory ?? '',
        //   password: postData?.password ?? '',
        Hospital_Name: postData?.hospitalName ?? '',
        Hospital_Department_Name: postData?.departmentName ?? '',
        Hospital_Category: postData?.hospitalCategory ?? '',
        Hospital_Registration_Number: postData?.registrationNumber ?? '',
        Starting_Date: postData?.startingDate ?? '',
        Expiring_Date: postData?.expiringDate ?? '',
        Address: postData?.address ?? '',
        State: postData?.state ?? '',
        District: postData?.district ?? '',
        Sub_District: postData?.subDistrict ?? '',
        Town: postData?.town ?? '',
        Village: postData?.village ?? '',
        Pin_Code: postData?.pinCode ?? '',
        Contact_No: postData?.mobileNumber ?? '',
        Emergency_Number: postData?.emergencyNumber ?? '',
        Ambulance_No: postData?.ambulanceNumber ?? '',
        Blood_Bank_No: postData?.bloodBankNumber ?? '',
        Helpline_No: postData?.helplineNumber ?? '',
        Hospital_Email: postData?.primaryEmail ?? '',
        Website_link: postData?.website ?? '',
        Established_Year: postData?.establishedSince ?? '',
        Contact_Person: postData?.contactPerson ?? '',
        Contact_Person_Number: postData?.contactPersonNumber ?? '',
        Contact_Person_Email: postData?.nodalPersonEmail ?? '',
        password: postData?.password ?? '',
        }
        // Handle form submission
        RegisterHospitalData(finalData)
      };

  return{
    RegisterHospitalData,
    postData,
    setPostData,
    handleSubmit
  }
}
