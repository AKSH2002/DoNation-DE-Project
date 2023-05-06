import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useBloodBankHook = () => {
    const [postData, setPostData] = useState({
        bloodBankName: "",
        parentHospitalName: "",
        bloodBankCategory: "",
        contactPerson: "",
        email: "",
        contactNumber: "",
        licenceNumber: "",
        licenceStartDate: "",
        licenceExpiryDate: "",
        helplineNumber: "",
        state: "",
        district: "",
        city: "",
        address: "",
        pinCode: "",
        password: "",
        confirmPassword: "",
      });

    const { mutate: RegisterBloodBankData } = useMutation(
        async (payload) => {
          const res = await fetch(`http://localhost:8000/blood-bank/signup`, {
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
          Blood_Bank_Name: postData?.bloodBankName ?? '',
          State: postData?.state ?? '',
          District: postData?.district ?? '',
          City: postData?.city ?? '',
          Address: postData?.address ?? '',
          Pincode: postData?.pinCode ?? '',
          Nodal_Officer: postData?.contactPerson ?? '',
          Contact_Nodal_Officer: postData?.contactNumber ?? '',
          Email_Nodal_Officer: postData?.email ?? '',
          Helpline: postData?.helplineNumber ?? '',
          // Blood_Component_Available: postData?.,
          License_No: postData?.licenceNumber ?? '',
          Date_License_Obtained: postData?.licenceStartDate ?? '',
          Date_of_Renewal: postData?.licenceExpiryDate ?? '',
          Category: postData?.bloodBankCategory ?? '',
          password: postData?.password ?? '',
        }
        // Handle form submission
        RegisterBloodBankData(finalData)
      };

  return{
    RegisterBloodBankData,
    postData,
    setPostData,
    handleSubmit
  }
}
