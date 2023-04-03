import React, { useState } from 'react';
import './BloodCampForm.css';

const BloodCampForm = () => {
    const [organizationName, setOrganizationName] = useState('');
    const [organizationType, setOrganizationType] = useState('Govt.');
    const [organizerName, setOrganizerName] = useState('');
    const [organizerMobileNumber, setOrganizerMobileNumber] = useState('');
    const [organizerEmail, setOrganizerEmail] = useState('');
    const [coOrganizerName, setCoOrganizerName] = useState('');
    const [coOrganizerMobileNumber, setCoOrganizerMobileNumber] = useState('');
    const [campName, setCampName] = useState('');
    const [campAddress, setCampAddress] = useState('');
    const [state, setState] = useState('Andhra Pradesh');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [bloodBank, setBloodBank] = useState('Dummy Blood Bank 1');
    const [campProposeDate, setCampProposeDate] = useState('');
    const [startingTime, setStartingTime] = useState('');
    const [endingTime, setEndingTime] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [estimatedParticipants, setEstimatedParticipants] = useState('');
    const [refrence, setRefrence] = useState('');
    const [remark, setRemark] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group top">
                <label htmlFor="organizationName">Organization Name *</label>
                <input
                    type="text"
                    id="organizationName"
                    value={organizationName}
                    onChange={(event) => setOrganizationName(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="organizationType">Organization Type</label>
                <select
                    id="organizationType"
                    value={organizationType}
                    onChange={(event) => setOrganizationType(event.target.value)}
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
                    value={organizerName}
                    onChange={(event) => setOrganizerName(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="organizerMobileNumber">Organizer Mobile Number *</label>
                <input
                    type="tel"
                    id="organizerMobileNumber"
                    value={organizerMobileNumber}
                    onChange={(event) => setOrganizerMobileNumber(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="organizerEmail">Organizer Email-id *</label>
                <input
                    type="email"
                    id="organizerEmail"
                    value={organizerEmail}
                    onChange={(event) => setOrganizerEmail(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="coOrganizerName">Co-Organizer Name</label>
                <input
                    type="text"
                    id="coOrganizerName"
                    value={coOrganizerName}
                    onChange={(event) => setCoOrganizerName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="coOrganizerMobileNumber">Co-Organizer Mobile Number</label>
                <input
                    type="tel"
                    id="coOrganizerMobileNumber"
                    value={coOrganizerMobileNumber}
                    onChange={(event) => setCoOrganizerMobileNumber(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="campName">Camp Name</label>
                <input
                    type="text"
                    id="campName"
                    value={campName}
                    onChange={(event) => setCampName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="campAddress">Camp Address *</label>
                <input
                    type="text"
                    id="campAddress"
                    value={campAddress}
                    onChange={(event) => setCampAddress(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="state">State </label>
                <select
                    id="state"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
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
                    value={district}
                    onChange={(event) => setDistrict(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="city">City Name *</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="bloodBank">Blood Bank *</label>
                <select
                    id="bloodBank"
                    value={bloodBank}
                    onChange={(event) => setBloodBank(event.target.value)}
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
                    value={campProposeDate}
                    onChange={(event) => setCampProposeDate(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="startingTime">Starting Time (24HH:MM) *</label>
                <input
                    type="time"
                    id="startingTime"
                    value={startingTime}
                    onChange={(event) => setStartingTime(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="endingTime">Ending Time (24HH:MM) *</label>
                <input
                    type="time"
                    id="endingTime"
                    value={endingTime}
                    onChange={(event) => setEndingTime(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                    type="text"
                    id="latitude"
                    value={latitude}
                    onChange={(event) => setLatitude(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                    type="text"
                    id="longitude"
                    value={longitude}
                    onChange={(event) => setLongitude(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="estimatedParticipants">Estimated Participants *</label>
                <input
                    type="number"
                    id="estimatedParticipants"
                    value={estimatedParticipants}
                    onChange={(event) => setEstimatedParticipants(event.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="refrence">Refrence/Camp Supporter (Prayojak)</label>
                <input
                    type="text"
                    id="refrence"
                    value={refrence}
                    onChange={(event) => setRefrence(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remark">Remark</label>
                <textarea
                    id="remark"
                    value={remark}
                    onChange={(event) => setRemark(event.target.value)}
                />
            </div>
            <div className='form1'>
            <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default BloodCampForm;
