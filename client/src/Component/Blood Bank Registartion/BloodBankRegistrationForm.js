import React from "react";
import "./BloodBankRegistrationForm.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useBloodBankHook } from "./useBloodBankHook";

function BloodBankRegistrationForm() {
  const { postData, setPostData, handleSubmit } = useBloodBankHook();

  return (
    <form className="form-container" method="post" onSubmit={handleSubmit}>
      <div className="bldbnk">
        <label>Blood Bank Registration Form</label>
      </div>
      <div className="form-field">
        <label htmlFor="bloodBankName">Blood Bank Name *</label>
        <input
          type="text"
          id="bloodBankName"
          value={postData.bloodBankName}
          onChange={(event) =>
            setPostData({ ...postData, bloodBankName: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="parentHospitalName">Parent Hospital Name</label>
        <input
          type="text"
          id="parentHospitalName"
          value={postData.parentHospitalName}
          onChange={(event) =>
            setPostData({ ...postData, parentHospitalName: event.target.value })
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="bloodBankCategory">Blood Bank Category *</label>
        <select
          id="bloodBankCategory"
          value={postData.bloodBankCategory}
          onChange={(event) =>
            setPostData({ ...postData, bloodBankCategory: event.target.value })
          }
          required
        >
          <option value="">-- Select Category --</option>
          <option value="Govt.">Govt.</option>
          <option value="Red Cross">Red Cross</option>
          <option value="Charitable">Charitable</option>
          <option value="Private">Private</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="contactPerson">Contact Person *</label>
        <input
          type="text"
          id="contactPerson"
          value={postData.contactPerson}
          onChange={(event) =>
            setPostData({ ...postData, contactPerson: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={postData.email}
          onChange={(event) =>
            setPostData({ ...postData, email: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contactNumber">Contact Number *</label>
        <input
          type="tel"
          id="contactNumber"
          value={postData.contactNumber}
          onChange={(event) =>
            setPostData({ ...postData, contactNumber: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="licenceNumber">Licence Number *</label>
        <input
          type="text"
          id="licenceNumber"
          value={postData.licenceNumber}
          onChange={(event) =>
            setPostData({ ...postData, licenceNumber: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="licenceStartDate">Licence Start Date *</label>
        <input
          type="date"
          id="licenceStartDate"
          value={postData.licenceStartDate}
          onChange={(event) =>
            setPostData({ ...postData, licenceStartDate: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="licenceExpiryDate">Licence Expiry Date *</label>
        <input
          type="date"
          id="licenceExpiryDate"
          value={postData.licenceExpiryDate}
          onChange={(event) =>
            setPostData({ ...postData, licenceExpiryDate: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="helplineNumber">Helpline Number</label>
        <input
          type="tel"
          id="helplineNumber"
          value={postData.helplineNumber}
          onChange={(event) =>
            setPostData({ ...postData, helplineNumber: event.target.value })
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="state">State *</label>
        <select
          id="state"
          value={postData.state}
          onChange={(event) =>
            setPostData({ ...postData, state: event.target.value })
          }
          required
        >
          <option value="">Select State</option>
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
      <div className="form-field">
        <label htmlFor="district">District *</label>
        <input
          type="text"
          id="district"
          value={postData.district}
          onChange={(event) =>
            setPostData({ ...postData, district: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={postData.city}
          onChange={(event) =>
            setPostData({ ...postData, city: event.target.value })
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="address">Address *</label>
        <textarea
          id="address"
          value={postData.address}
          onChange={(event) =>
            setPostData({ ...postData, address: event.target.value })
          }
          required
        ></textarea>
      </div>
      <div className="form-field">
        <label htmlFor="pinCode">Pin Code *</label>
        <input
          type="number"
          id="pinCode"
          value={postData.pinCode}
          onChange={(event) =>
            setPostData({ ...postData, pinCode: event.target.value })
          }
          required
        />
      </div>
      {/* <div className="form-field">
        <label htmlFor="availableStock">Available Stock</label>
        <div id="availableStock" className="checkbox-group">
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="aNegative"
              value="A-"
              checked={availableStock.includes("A-")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="aNegative">A-</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="bNegative"
              value="B-"
              checked={availableStock.includes("B-")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="bNegative">B-</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="abPositive"
              value="AB+"
              checked={availableStock.includes("AB+")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="abPositive">AB+</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="abNegative"
              value="AB-"
              checked={availableStock.includes("AB-")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="abNegative">AB-</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="aPositive"
              value="A+"
              checked={availableStock.includes("A+")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="aPositive">A+</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="bPositive"
              value="B+"
              checked={availableStock.includes("B+")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="bPositive">B+</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="oPositive"
              value="O+"
              checked={availableStock.includes("O+")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="oPositive">O+</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="oNegative"
              value="O-"
              checked={availableStock.includes("O-")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="oNegative">O-</label>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="bombayBlood"
              value="Bombay Blood"
              checked={availableStock.includes("Bombay Blood")}
              onChange={(event) => handleAvailableStockChange(event)}
            />
            <label htmlFor="bombayBlood">Bombay Blood</label>
          </div>
        </div>
      </div> */}
      <div className="form-field">
        <label htmlFor="password">Password *</label>
        <input
          type="password"
          id="password"
          value={postData.password}
          onChange={(event) =>
            setPostData({ ...postData, password: event.target.value })
          }
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="confirmPassword">Confirm Password *</label>
        <input
          type="password"
          id="confirmPassword"
          value={postData.confirmPassword}
          onChange={(event) =>
            setPostData({ ...postData, confirmPassword: event.target.value })
          }
          required
        />
      </div>
      <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="error" required />
                  }
                  label="Accept the terms and Conditions."
                />
      <div className="form-field">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default BloodBankRegistrationForm;
