import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import CircularProgress from '@mui/material/CircularProgress';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
// import userService from '../../Services/UserService'
// import AuthenticationService from '../../Services/AuthenticationService';
import Button from '@mui/material/Button';    
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import Swal from "sweetalert2";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';   
import State_City_Data from '../../Services/Data';
import React, { useState, useRef } from "react";
import Pagination from '@mui/material/Pagination';
import { DataGrid } from "@mui/x-data-grid";
import "./RequestBlood.css";
import { useSearchHospitalHook } from "./useSearchHospitalHook";



const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
	<IMaskInput
	  {...other}
	  mask="000000"
	  definitions={{
		"#": /[1-9]/
	  }}
	  inputRef={ref}
	  onAccept={(value) => onChange({ target: { name: props.name, value } })}
	  overwrite
	/>
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const columns = [
	{
		id: 1,
		field: "Hospital_Name",
		headerName: "Hospital_Name",
		width: 150,
	  },
	  { id: 2, field: "Hospital_Department_Name", headerName: "Hospital_Department_Name", width: 120 },
	  { id: 3, field: "Address", headerName: "Address", width: 120 },
	  { id: 4, field: "State", headerName: "State", width: 120 },
	  { id: 5, field: "District", headerName: "District", width: 120 },
	  { id: 6, field: "Pin_Code", headerName: "Pin_Code", width: 80 },
	  { id: 7, field: "Contact_No", headerName: " Contact_No", width: 80 },
	  { id: 8, field: "Emergency_Number", headerName: "Emergency_Number", width: 120 },
	  { id: 9, field: "Ambulance_No", headerName: "Ambulance_No", width: 120 },
	  { id: 10, field: "Helpline_No", headerName: "Helpline_No", width: 120 },
];



export default function SearchHospital() {
	const {
		data: originalData,
		isLoading,
		searchFor,
		setSearchFor,
		handleFilter,
	  } = useSearchHospitalHook();
	  console.log("originalData", originalData);

	  const rows = originalData?.map((item, index) => {
		return {
		  id: index + 1,
		  Hospital_Name: item.Hospital_Name,
		  Hospital_Department_Name: item.Hospital_Department_Name,
		  Address: item.Address,
		  State:item.State,
		  District: item.District,
		  Pin_Code: item.Pin_Code,
		  Contact_No:item.Contact_No,
		  Emergency_Number: item.Emergency_Number,
		  Ambulance_No: item.Ambulance_No,
		  Helpline_No: item.Helpline_No,
		};
	  });

	const [seachSpinner, setseachSpinner] = useState(false);
	const [requestSpinner, setRequestSpinner] = useState(false);
	// const [Detail, setDetail] = useState({
	// 	Camp_Propose_Date: null,
	//   });
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
	
	// const [searchFor, setSearchFor] = useState({
	// 	bloodGroup:"",
	// 	city:"",
	// 	pincode:"",
    //     date:"",
	// });
	// const BloodTypes = [ 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Bombay'];

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
	
		const response = await fetch("http://localhost:8000/search-for-hospital", {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
		  },
		});
	
		// const data = await response.json();
		// Do something with the response data
	  };





	return (
		<>
		<div className="search_donor_container" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/search-bg.svg'})`}}>
			<section>
				<h1><span>Search</span> for <span>Hospital</span></h1>
			</section>
			<section>
				<Box component="form" onSubmit={handleSearchSubmit} Validate sx={{ width:"fit-content", margin:"0 auto"}}>
					<div className="search_donor_input">

						<FormControl style={{gridArea:'State'}} size="small" sx={{width:"200px"}}>
							<InputLabel id="State-label" color='error' required>State</InputLabel>
							<Select id="state" labelId="State-label" name="selectedState" label="State*" value={selectedState} color='error' required 
								onChange={(e) => {
									setSelectedState(e.target.value);
									setcityList(data[e.target.value].cities);
								}}>
								{State.map((name, key) => (
									<MenuItem key={key} value={name} >{name}</MenuItem>
								))}
							</Select>
						</FormControl>

						<FormControl style={{gridArea:'City'}} size="small" sx={{width:"200px"}}>
							<InputLabel id="City-label" color='error' required>City</InputLabel>
							<Select id="city" labelId="City-label" name="City_Name" label="City_Name*" value={searchFor.City_Name} color='error' required 
								onChange={(e) => {setSearchFor({...searchFor, [e.target.name]: e.target.value});}}>
								<MenuItem key="default" value="Default" disabled>Select City</MenuItem>
								{cityList.map((name, key) => (
									<MenuItem key={key} value={name} >{name}</MenuItem>
								))}
							</Select>
						</FormControl>

						<TextField id="pincode" label="Pincode" name="pincode" value={searchFor.pincode} size="small" color='error' autoComplete="pincode" 
							onChange={(e) => {setSearchFor({...searchFor, [e.target.name]: e.target.value});}}
							InputProps={{
								inputComponent: TextMaskCustom,
							}}
						/>

						{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
											label="Date of Camp"
											inputFormat="dd/MM/yyyy"
											value={Detail.Camp_Propose_Date}
											openTo="year"
											views={["year", "month", "day"]}
											onChange={(newDate) => {
												setDetail({ ...Detail, Camp_Propose_Date: newDate });
											}}
											renderInput={(params) => (
												<TextField
												{...params}
												style={{ gridArea: "DOC" }}
												color="error"
												required
												/>
											)}
											/>
										</LocalizationProvider> */}
					</div>
					<Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} onClick={() => handleFilter()}
					> 
                        Search 
                        {seachSpinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
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
					{/* <Button variant="contained" onClick={() => handleRequestSubmit()} sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                        Search 
                        {requestSpinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
                    </Button> */}
				</div>
			</section>
		</div>
		</>
	);
}
