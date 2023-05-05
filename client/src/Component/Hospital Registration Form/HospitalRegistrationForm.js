import React, { useState } from 'react';
import './HospitalRegistrationForm.css';

const HospitalRegistrationForm = () => {
    const [hospitalName, setHospitalName] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [hospitalCategory, setHospitalCategory] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [startingDate, setStartingDate] = useState('');
    const [expiringDate, setExpiringDate] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [subDistrict, setSubDistrict] = useState('');
    const [town, setTown] = useState('');
    const [village, setVillage] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emergencyNumber, setEmergencyNumber] = useState('');
    const [ambulanceNumber, setAmbulanceNumber] = useState('');
    const [bloodBankNumber, setBloodBankNumber] = useState('');
    const [helplineNumber, setHelplineNumber] = useState('');
    const [primaryEmail, setPrimaryEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [establishedSince, setEstablishedSince] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactPersonNumber, setContactPersonNumber] = useState('');
    const [nodalPersonNumber, setNodalPersonNumber] = useState('');
    const [nodalPersonEmail, setNodalPersonEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
    };

    return (
        <form className="hospital-registration-form" onSubmit={handleSubmit}>
            {/* <h3>Hospital Registration Form</h3> */}
            <div className="form-group">
            <div className='bldhsp'>
                <label>Hospital Registration Form</label>
            </div>
                <label htmlFor="hospitalName">Hospital Name*</label>
                <input
                    type="text"
                    id="hospitalName"
                    name="hospitalName"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="departmentName">Hospital Department Name</label>
                <input
                    type="text"
                    id="departmentName"
                    name="departmentName"
                    placeholder="Blood Bank Department"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="hospitalCategory">Hospital Category*</label>
                <select
                    id="hospitalCategory"
                    name="hospitalCategory"
                    value={hospitalCategory}
                    onChange={(e) => setHospitalCategory(e.target.value)}
                    required
                >
                    <option value="">-- Select Category --</option>
                    <option value="Govt.">Govt.</option>
                    <option value="Charitable">Charitable</option>
                    <option value="Private">Private</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="registrationNumber">Hospital Registration Number*</label>
                <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    required />
                <div className="date-range">
                    <label htmlFor="startingDate">Starting Date*</label>
                    <input
                        type="date"
                        id="startingDate"
                        name="startingDate"
                        value={startingDate}
                        onChange={(e) => setStartingDate(e.target.value)}
                        required
                    />
                    <label htmlFor="expiringDate">Expiring Date*</label>
                    <input
                        type="date"
                        id="expiringDate"
                        name="expiringDate"
                        value={expiringDate}
                        onChange={(e) => setExpiringDate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address*</label>
                <textarea
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="state">State*</label>
                <select
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
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
                <label htmlFor="district">District*</label>
                <input
                    type="text"
                    id="district"
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="subDistrict">Sub District</label>
                <input
                    type="text"
                    id="subDistrict"
                    name="subDistrict"
                    value={subDistrict}
                    onChange={(e) => setSubDistrict(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="town">Town</label>
                <input
                    type="text"
                    id="town"
                    name="town"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="village">Village</label>
                <input
                    type="text"
                    id="village"
                    name="village"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="pinCode">Pin Code*</label>
                <input
                    type="number"
                    id="pinCode"
                    name="pinCode"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile/Contact No.</label>
                <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="emergencyNumber">Emergency Number</label>
                <input
                    type="tel"
                    id="emergencyNumber"
                    name="emergencyNumber"
                    value={emergencyNumber}
                    onChange={(e) => setEmergencyNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="ambulanceNumber">Ambulance Phone No.</label>
                <input
                    type="tel"
                    id="ambulanceNumber"
                    name="ambulanceNumber"
                    value={ambulanceNumber}
                    onChange={(e) => setAmbulanceNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="bloodBankNumber">Blood Bank Phone No.</label>
                <input
                    type="tel"
                    id="bloodBankNumber"
                    name="bloodBankNumber"
                    value={bloodBankNumber}
                    onChange={(e) => setBloodBankNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="helplineNumber">Helpline No.</label>
                <input
                    type="tel"
                    id="helplineNumber"
                    name="helplineNumber"
                    value={helplineNumber}
                    onChange={(e) => setHelplineNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="primaryEmail">Hospital Primary Email id</label>
                <input
                    type="email"
                    id="primaryEmail"
                    name="primaryEmail"
                    value={primaryEmail}
                    onChange={(e) => setPrimaryEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="website">Website link</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>
            <div className="form-group">
                    <label htmlFor="establishedSince">Established Since(Year)</label>
                    <input
                        type="number"
                        id="establishedSince"
                        name="establishedSince"
                        value={establishedSince}
                        onChange={(e) => setEstablishedSince(e.target.value)}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="contactPerson">Contact (Nodal) Person*</label>
                <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="contactPersonNumber">Contact (Nodal) Person Number*</label>
                <input
                    type="tel"
                    id="contactPersonNumber"
                    name="contactPersonNumber"
                    value={contactPersonNumber}
                    onChange={(e) => setContactPersonNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="nodalPersonEmail">Nodal Person Email*</label>
                <input
                    type="email"
                    id="nodalPersonEmail"
                    name="nodalPersonEmail"
                    value={nodalPersonEmail}
                    onChange={(e) => setNodalPersonEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="nodalPersonNumber">Nodal Person Contact Number*</label>
                <input
                    type="tel"
                    id="nodalPersonNumber"
                    name="nodalPersonNumber"
                    value={nodalPersonNumber}
                    onChange={(e) => setNodalPersonNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password*</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form1">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default HospitalRegistrationForm;


