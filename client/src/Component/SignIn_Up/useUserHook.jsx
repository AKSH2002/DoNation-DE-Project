import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useUserHook = () => {
    const [Detail, setDetail] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        bloodGroup: "",
        whatsAppNumber: "",
        lastDonationDate: null,
        gender: "",
        username: "",
        password: "",
      });
      const [Address, setAddress] = useState({
        streetAddress: "",
        city: "",
        state: "",
        pincode: "",
      });

    const { mutate: RegisterUserData } = useMutation(
        async (payload) => {
          const res = await fetch(`http://localhost:8000/user/signup`, {
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
          First_Name: Detail?.firstName ?? '',
          Last_Name: Detail?.lastName ?? '',
          Date_Of_Birth: Detail?.dateOfBirth ?? '',
          Blood_Group: Detail?.bloodGroup ?? '',
          Whatsapp_Number: Detail?.whatsAppNumber ?? '',
          Gender: Detail?.gender ?? '',
          Last_Donation_Date: Detail?.lastDonationDate ?? '',
          Email_Id: Detail?.username ?? '',
          Address: Address?.streetAddress ?? '',
          State: Address?.state ?? '',
          City: Address?.city ?? '',
          Pincode: Address?.pincode ?? '',
          password: Detail?.password ?? '',
        }
        
        // Handle form submission
        RegisterUserData(finalData)
      };

  return{
    RegisterUserData,
    Detail,
    setDetail,
    Address,
    setAddress,
    handleSubmit
  }
}
