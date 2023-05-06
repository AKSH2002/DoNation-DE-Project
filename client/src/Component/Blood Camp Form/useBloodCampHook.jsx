import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useBloodCampHook = () => {
    const [postData, setPostData] = useState({
        organizationName: "",
        organizationType: "",
        organizerName: "",
        organizerMobileNumber: "",
        organizerEmail: "",
        coOrganizerName: "",
        coOrganizerMobileNumber: "",
        campName: "",
        campAddress: "",
        state: "",
        district: "",
        city: "",
        bloodBank: "",
        campProposeDate: "",
        startingTime: "",
        endingTime: "",
        latitude: "",
        longitude: "",
        estimatedParticipants: "",
        refrence: "",
        remark: "",
      });

    const { mutate: RegisterBloodCampData } = useMutation(
        async (payload) => {
          const res = await fetch(`http://localhost:8000/blood-camp/signup`, {
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
          Organization_Name: postData?.organizationName ?? '',
          Organization_Type: postData?.organizationType ?? '',
          Organizer_Name: postData?.organizerName ?? '',
          Organizer_Mobile_Number: postData?.organizerMobileNumber ?? '',
          Organizer_Email: postData?.organizerEmail ?? '',
          Co_Organizer_Name: postData?.coOrganizerName ?? '',
          Co_Organizer_Mobile_Number: postData?.coOrganizerMobileNumber ?? '',
          Camp_Name: postData?.campName ?? '',
          Camp_Address: postData?.campAddress ?? '',
          State: postData?.state ?? '',
          District: postData?.district ?? '',
          City_Name: postData?.city ?? '',
          Blood_Bank: postData?.bloodBank ?? '',
          Camp_Propose_Date: postData?.campProposeDate ?? '',
          Starting_Time: postData?.startingTime ?? '',
          Ending_Time: postData?.endingTime ?? '',
          Latitude: postData?.latitude ?? '',
          Longitude: postData?.longitude ?? '',
          Estimated_Participants: postData?.estimatedParticipants ?? '',
          Camp_Supporter: postData?.refrence ?? '',
          Remark: postData?.remark ?? '',
        }
        
        // Handle form submission
        RegisterBloodCampData(finalData)
      };

  return{
    RegisterBloodCampData,
    postData,
    setPostData,
    handleSubmit
  }
}
