import React from 'react';
import './BloodCampForm.css';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useBloodCampHook } from "./useBloodCampHook";

function BloodCampRegistrationForm() {
    const { postData, setPostData, handleSubmit } = useBloodCampHook();

    return (
        <form onSubmit={handleSubmit} method='POST'>
            <div className="form-group top">
                <div className='bldcmp'>
                     <label>Blood Camp Registration Form</label>
                </div>
                <label htmlFor="organizationName">Organization Name *</label>
                <input
                    type="text"
                    id="organizationName"
                    value={postData.organizationName}
                    onChange={(event) => setPostData({ ...postData, organizationName: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="organizationType">Organization Type</label>
                <select
                    id="organizationType"
                    value={postData.organizationType}
                    onChange={(event) => setPostData({ ...postData, organizationType: event.target.value })}
                >
                    <option value="Govt.">Govt.</option>
                    <option value="Charitable">Charitable</option>
                    <option value="Private">Private</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="organizerName">Organizer Name *</label>
                <input
                    type="text"
                    id="organizerName"
                    value={postData.organizerName}
                    onChange={(event) => setPostData({ ...postData, organizerName: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="organizerMobileNumber">Organizer Mobile Number *</label>
                <input
                    type="tel"
                    id="organizerMobileNumber"
                    value={postData.organizerMobileNumber}
                    onChange={(event) => setPostData({ ...postData, organizerMobileNumber: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="organizerEmail">Organizer Email-id *</label>
                <input
                    type="email"
                    id="organizerEmail"
                    value={postData.organizerEmail}
                    onChange={(event) => setPostData({ ...postData, organizerEmail: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="coOrganizerName">Co-Organizer Name</label>
                <input
                    type="text"
                    id="coOrganizerName"
                    value={postData.coOrganizerName}
                    onChange={(event) => setPostData({ ...postData, coOrganizerName: event.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="coOrganizerMobileNumber">Co-Organizer Mobile Number</label>
                <input
                    type="tel"
                    id="coOrganizerMobileNumber"
                    value={postData.coOrganizerMobileNumber}
                    onChange={(event) => setPostData({ ...postData, coOrganizerMobileNumber: event.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="campName">Camp Name</label>
                <input
                    type="text"
                    id="campName"
                    value={postData.campName}
                    onChange={(event) => setPostData({ ...postData, campName: event.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="campAddress">Camp Address *</label>
                <input
                    type="text"
                    id="campAddress"
                    value={postData.campAddress}
                    onChange={(event) => setPostData({ ...postData, campAddress: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="state">State </label>
                <select
                    id="state"
                    value={postData.state}
                    onChange={(event) => setPostData({ ...postData, state: event.target.value })}
                    required
                >
                    <option value="">-- Select State --</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="district">District *</label>
                <input
                    type="text"
                    id="district"
                    value={postData.district}
                    onChange={(event) => setPostData({ ...postData, district: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="city">City Name *</label>
                <input
                    type="text"
                    id="city"
                    value={postData.city}
                    onChange={(event) => setPostData({ ...postData, city: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="bloodBank">Blood Bank *</label>
                <select
                    id="bloodBank"
                    value={postData.bloodBank}
                    onChange={(event) => setPostData({ ...postData, bloodBank: event.target.value })}
                    required
                >
                    <option value="Dummy Blood Bank 1">Dummy Blood Bank 1</option>
                    <option value="Dummy Blood Bank 2">Dummy Blood Bank 2</option>
                    <option value="Dummy Blood Bank 3">Dummy Blood Bank 3</option>
                    <option value="Dummy Blood Bank 4">Dummy Blood Bank 4</option>
                    <option value="Dummy Blood Bank 5">Dummy Blood Bank 5</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="campProposeDate">Camp Propose Date *</label>
                <input
                    type="date"
                    id="campProposeDate"
                    value={postData.campProposeDate}
                    onChange={(event) => setPostData({ ...postData, campProposeDate: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="startingTime">Starting Time (24HH:MM) *</label>
                <input
                    type="text"
                    id="startingTime"
                    value={postData.startingTime}
                    onChange={(event) => setPostData({ ...postData, startingTime: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="endingTime">Ending Time (24HH:MM) *</label>
                <input
                    type="text"
                    id="endingTime"
                    value={postData.endingTime}
                    onChange={(event) => setPostData({ ...postData, endingTime: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                    type="text"
                    id="latitude"
                    value={postData.latitude}
                    onChange={(event) => setPostData({ ...postData, latitude: event.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                    type="text"
                    id="longitude"
                    value={postData.longitude}
                    onChange={(event) => setPostData({ ...postData, longitude: event.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="estimatedParticipants">Estimated Participants *</label>
                <input
                    type="number"
                    id="estimatedParticipants"
                    value={postData.estimatedParticipants}
                    onChange={(event) => setPostData({ ...postData, estimatedParticipants: event.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="refrence">Refrence/Camp Supporter (Prayojak)</label>
                <input
                    type="text"
                    id="refrence"
                    value={postData.refrence}
                    onChange={(event) => setPostData({ ...postData, refrence: event.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remark">Remark</label>
                <textarea
                    id="remark"
                    value={postData.remark}
                    onChange={(event) => setPostData({ ...postData, remark: event.target.value })}
                />
            </div>
            <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="error" required />
                  }
                  label="Accept the terms and Conditions."
                />
            <div className='form1'>
            <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default BloodCampRegistrationForm;
