import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import userService from "../../Services/UserService";
// import AuthenticationService from "../../Services/AuthenticationService";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import State_City_Data from "../../Services/Data";
import React, { useState, useEffect, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import { DataGrid } from "@mui/x-data-grid";
import "./RequestBlood.css";
import { useSearchBloodHook } from "./useSearchBloodHook";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const columns = [
	{
		id: 1,
		field: "First_Name",
		headerName: "First_Name",
		width: 120,
	  },
	  { id: 2, field: "Last_Name", headerName: "Last_Name", width: 120 },
	  { id: 3, field: "Blood_Group", headerName: "Blood_Group", width: 120 },
	  { id: 4, field: "Whatsapp_Number", headerName: "Whatsapp_Number", width: 120 },
	  { id: 5, field: "Gender", headerName: "Gender", width: 120 },
	  { id: 6, field: "Email_Id", headerName: "Email_Id", width: 80 },
	  { id: 7, field: "Address", headerName: " Address", width: 80 },
	  { id: 8, field: "State", headerName: "State", width: 120 },
	  { id: 9, field: "City", headerName: "City", width: 120 },
	  { id: 10, field: "Pincode", headerName: "Pincode", width: 120 },
];

// function CustomNoRowsOverlay() {
//   return (
//     <div
//       style={{
//         height: "90%",
//         marginTop: "10px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <svg
//         width="120"
//         height="100"
//         viewBox="0 0 184 152"
//         aria-hidden
//         focusable="false"
//       >
//         <g fill="none" fillRule="evenodd">
//           <g transform="translate(24 31.67)">
//             <ellipse
//               cx="67.797"
//               cy="106.89"
//               rx="67.797"
//               ry="12.668"
//               fill="#f5f5f5"
//               fillOpacity="0.8"
//             />
//             <path
//               fill="#aeb8c2"
//               d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
//             />
//             <path
//               fill="#f5f5f7"
//               d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
//             />
//             <path
//               fill="#dce0e6"
//               d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
//             />
//           </g>
//           <path
//             fill="#dce0e6"
//             d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
//           />
//           <g fill="#fff" transform="translate(149.65 15.383)">
//             <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
//             <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
//           </g>
//         </g>
//       </svg>
//       <Box>No Donors</Box>
//     </div>
//   );
// }

export default function SearchBlood() {
  const { 
    data: originalData, 
    isLoading, 
    searchFor, 
    setSearchFor,
    handleFilter,
   } = useSearchBloodHook();
    console.log("originalData", originalData);


  const rows = originalData?.map((item, index) => {
		return {
		  id: index + 1,
		  First_Name: item.First_Name,
		  Last_Name: item.Last_Name,
		  Blood_Group: item.Blood_Group,
		  Whatsapp_Number:item.Whatsapp_Number,
		  Gender: item.Gender,
		  Email_Id: item.Email_Id,
		  Address:item.Address,
		  State: item.State,
		  City: item.City,
		  Pincode: item.Pincode,
		};
	  });

  const [seachSpinner, setseachSpinner] = useState(false);
  const [requestSpinner, setRequestSpinner] = useState(false);
  const [Detail, setDetail] = useState({
		Camp_Propose_Date: null,
	  });
	  const pagination = {
		page: 0,
		totalPages: 1,
		totalRows: 1,
		Loading: false,
	  };

  const [foundDonors, setFoundDonors] = useState([]);

  const { data } = State_City_Data;
  const State = Object.keys(data);
  const [selectedState, setSelectedState] = useState();
  const [cityList, setcityList] = useState([]);
 
  const BloodTypes = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
    "Bombay",
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const prevSelectedRows = useRef(selectedRows);


  function CustomPagination() {
    return (
      <Pagination
        color="error"
        count={pagination.totalPages}
        page={pagination.page + 1}
        onChange={(event, value) => {
          // setPagination({ ...pagination, page: value - 1 });
        }}
      />
    );
  }

  const handleSearchSubmit = async (e) => {
		e.preventDefault();


const response = await fetch("http://localhost:8000/search-for-user", {
  method: "GET",
  headers: {
  "Content-Type": "application/json",
  },
});
};

  return (
    <>
      <div
        className="search_donor_container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/search-bg.svg"
          })`,
        }}
      >
        <section>
          <h1>
            <span>Search</span> for <span>Blood Donor</span>
          </h1>
        </section>
        <section>
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            Validate
            sx={{ width: "fit-content", margin: "0 auto" }}
          >
            <div className="search_donor_input">
              {/* <FormControl
                style={{ gridArea: "BlGroup" }}
                size="small"
                sx={{ width: "200px" }}
              >
                <InputLabel id="Bl-group-label" color="error" required>
                  Blood Group
                </InputLabel>
                <Select
                  id="Blood-group"
                  labelId="Bl-group-label"
                  name="bloodGroup"
                  label="Blood Group*"
                  value={searchFor.bloodGroup}
                  color="error"
                  required
                  onChange={(e) => {
                    setSearchFor({
                      ...searchFor,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  {BloodTypes.map((name, key) => (
                    <MenuItem key={key} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}

              <FormControl
                style={{ gridArea: "State" }}
                size="small"
                sx={{ width: "200px" }}
              >
                <InputLabel id="State-label" color="error" required>
                  State
                </InputLabel>
                <Select
                  id="state"
                  labelId="State-label"
                  name="selectedState"
                  label="State*"
                  value={selectedState}
                  color="error"
                  required
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setcityList(data[e.target.value].cities);
                  }}
                >
                  {State.map((name, key) => (
                    <MenuItem key={key} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                style={{ gridArea: "City" }}
                size="small"
                sx={{ width: "200px" }}
              >
                <InputLabel id="City-label" color="error" required>
                  City
                </InputLabel>
                <Select
                  id="city"
                  labelId="City-label"
                  name="city"
                  label="City*"
                  value={searchFor.city}
                  color="error"
                  required
                  onChange={(e) => {
                    setSearchFor({
                      ...searchFor,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <MenuItem key="default" value="Default" disabled>
                    Select City
                  </MenuItem>
                  {cityList.map((name, key) => (
                    <MenuItem key={key} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                id="pincode"
                label="Pincode"
                name="pincode"
                value={searchFor.pincode}
                size="small"
                color="error"
                autoComplete="pincode"
                onChange={(e) => {
                  setSearchFor({
                    ...searchFor,
                    [e.target.name]: e.target.value,
                  });
                }}
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
              />
            </div>
            <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} onClick={() => handleFilter()}> 
              Search
              {seachSpinner && (
                <CircularProgress sx={{ ml: 2, color: "white" }} size={20} />
              )}
            </Button>
          </Box>
          <div className="search_donor_result">
            <DataGrid
              getRowId={(row) => row.id}
              columns={columns}
              rows={rows}
              page={pagination.page}
              pageSize={pagination.totalPages}
              rowsPerPageOptions={[5]}
              rowCount={pagination.totalRows}
              loading={pagination.Loading}
              pagination
              paginationMode="server"
              checkboxSelection
              autoHeight
              style={{ backgroundColor: "white" }}
              onSelectionModelChange={(newSelection) => {
                setSelectedRows(newSelection);
              }}
              selectionModel={selectedRows}
              components={{
                Pagination: CustomPagination,
                // NoRowsOverlay: CustomNoRowsOverlay,
                // NoResultsOverlay: CustomNoRowsOverlay,
              }}
            />
            {/* <Button
              variant="contained"
              onClick={() => handleRequestSubmit()}
              sx={{
                mt: 2,
                mb: 2,
                pl: 4,
                pr: 4,
                fontSize: "15px",
                fontWeight: "bold",
                backgroundColor: "#c6414c",
                ":hover": { bgcolor: "#c6414c" },
              }}
            >
              Request
              {requestSpinner && (
                <CircularProgress sx={{ ml: 2, color: "white" }} size={20} />
              )}
            </Button> */}
          </div>
        </section>
      </div>
    </>
  );
}