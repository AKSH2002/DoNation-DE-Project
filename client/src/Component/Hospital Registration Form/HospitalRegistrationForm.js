import React from 'react';
import './HospitalRegistrationForm.css';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useHospitalHook } from "./useHospitalHook.jsx";

function HospitalRegistrationForm() {
    const { postData, setPostData, handleSubmit } = useHospitalHook();

    return (
        <form className="hospital-registration-form" method='POST' onSubmit={handleSubmit}>
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
                    value={postData.hospitalName}
                    onChange={(e) => setPostData({ ...postData, hospitalName: e.target.value })}
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
                    value={postData.departmentName}
                    onChange={(e) => setPostData({ ...postData, departmentName: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="hospitalCategory">Hospital Category*</label>
                <select
                    id="hospitalCategory"
                    name="hospitalCategory"
                    value={postData.hospitalCategory}
                    onChange={(e) => setPostData({ ...postData, hospitalCategory: e.target.value })}
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
                    value={postData.registrationNumber}
                    onChange={(e) => setPostData({ ...postData, registrationNumber: e.target.value })}
                    required />
                <div className="date-range">
                    <label htmlFor="startingDate">Starting Date*</label>
                    <input
                        type="date"
                        id="startingDate"
                        name="startingDate"
                        value={postData.startingDate}
                        onChange={(e) => setPostData({ ...postData, startingDate: e.target.value })}
                        required
                    />
                    <label htmlFor="expiringDate">Expiring Date*</label>
                    <input
                        type="date"
                        id="expiringDate"
                        name="expiringDate"
                        value={postData.expiringDate}
                        onChange={(e) => setPostData({ ...postData, expiringDate: e.target.value })}
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address*</label>
                <textarea
                    id="address"
                    name="address"
                    value={postData.address}
                    onChange={(e) => setPostData({ ...postData, address: e.target.value })}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="state">State*</label>
                <select
                    id="state"
                    name="state"
                    value={postData.state}
                    onChange={(e) => setPostData({ ...postData, state: e.target.value })}
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
                    value={postData.district}
                    onChange={(e) => setPostData({ ...postData, district: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="subDistrict">Sub District</label>
                <input
                    type="text"
                    id="subDistrict"
                    name="subDistrict"
                    value={postData.subDistrict}
                    onChange={(e) => setPostData({ ...postData, subDistrict: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="town">Town</label>
                <input
                    type="text"
                    id="town"
                    name="town"
                    value={postData.town}
                    onChange={(e) => setPostData({ ...postData, town: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="village">Village</label>
                <input
                    type="text"
                    id="village"
                    name="village"
                    value={postData.village}
                    onChange={(e) => setPostData({ ...postData, village: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="pinCode">Pin Code*</label>
                <input
                    type="number"
                    id="pinCode"
                    name="pinCode"
                    value={postData.pinCode}
                    onChange={(e) => setPostData({ ...postData, pinCode: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile/Contact No.</label>
                <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={postData.mobileNumber}
                    onChange={(e) => setPostData({ ...postData, mobileNumber: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="emergencyNumber">Emergency Number</label>
                <input
                    type="tel"
                    id="emergencyNumber"
                    name="emergencyNumber"
                    value={postData.emergencyNumber}
                    onChange={(e) => setPostData({ ...postData, emergencyNumber: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="ambulanceNumber">Ambulance Phone No.</label>
                <input
                    type="tel"
                    id="ambulanceNumber"
                    name="ambulanceNumber"
                    value={postData.ambulanceNumber}
                    onChange={(e) => setPostData({ ...postData, ambulanceNumber: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="bloodBankNumber">Blood Bank Phone No.</label>
                <input
                    type="tel"
                    id="bloodBankNumber"
                    name="bloodBankNumber"
                    value={postData.bloodBankNumber}
                    onChange={(e) => setPostData({ ...postData, bloodBankNumber: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="helplineNumber">Helpline No.</label>
                <input
                    type="tel"
                    id="helplineNumber"
                    name="helplineNumber"
                    value={postData.helplineNumber}
                    onChange={(e) => setPostData({ ...postData, helplineNumber: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="primaryEmail">Hospital Primary Email id</label>
                <input
                    type="email"
                    id="primaryEmail"
                    name="primaryEmail"
                    value={postData.primaryEmail}
                    onChange={(e) => setPostData({ ...postData, primaryEmail: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="website">Website link</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    value={postData.website}
                    onChange={(e) => setPostData({ ...postData, website: e.target.value })}
                />
            </div>
            <div className="form-group">
                    <label htmlFor="establishedSince">Established Since(Year)</label>
                    <input
                        type="number"
                        id="establishedSince"
                        name="establishedSince"
                        value={postData.establishedSince}
                        onChange={(e) => setPostData({ ...postData, establishedSince: e.target.value })}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="contactPerson">Contact (Nodal) Person*</label>
                <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={postData.contactPerson}
                    onChange={(e) => setPostData({ ...postData, contactPerson: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="contactPersonNumber">Contact (Nodal) Person Number*</label>
                <input
                    type="tel"
                    id="contactPersonNumber"
                    name="contactPersonNumber"
                    value={postData.contactPersonNumber}
                    onChange={(e) => setPostData({ ...postData, contactPersonNumber: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="nodalPersonEmail">Nodal Person Email*</label>
                <input
                    type="email"
                    id="nodalPersonEmail"
                    name="nodalPersonEmail"
                    value={postData.nodalPersonEmail}
                    onChange={(e) => setPostData({ ...postData, nodalPersonEmail: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password*</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={postData.password}
                    onChange={(e) => setPostData({ ...postData, password: e.target.value })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={postData.confirmPassword}
                    onChange={(e) => setPostData({ ...postData, confirmPassword: e.target.value })}
                    required
                />
            </div>
            <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="error" required />
                  }
                  label="Accept the terms and Conditions."
                />
            <div className="form1">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default HospitalRegistrationForm;