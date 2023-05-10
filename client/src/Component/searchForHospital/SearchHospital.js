import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import userService from '../../Services/UserService'
// import AuthenticationService from '../../Services/AuthenticationService';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import State_City_Data from "../../Services/Data";
import React, { useState, useRef } from "react";
import Pagination from "@mui/material/Pagination";
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
    field: "Hospital_Name",
    headerName: "Hospital Name",
    width: 200,
  },
  { id: 2, field: "State", headerName: "State", width: 120 },
  { id: 3, field: "District", headerName: "District", width: 150 },
  { id: 4, field: "Address", headerName: "Address", width: 150 },
  { id: 5, field: "Pin_Code", headerName: "Pin_Code", width: 120 },
  { id: 6, field: "Helpline_No", headerName: "Helpline_No", width: 120 },
];

//   {
//     field: "srNo",
//     headerName: "Sr. No.",
//     type: "number",
//     align: "center",
//     sortable: false,
//     disableColumnMenu: true,
//     width: 70,
//     valueGetter: (params) => {
//       return params.api.getRowIndex(params.row.id) + 1;
//     },
//   },
//   {
//     field: "Name",
//     headerName: "Full name",
//     sortable: false,
//     width: 200,
//     disableColumnMenu: true,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
//   {
//     field: "address",
//     headerName: "Address",
//     sortable: false,
//     disableColumnMenu: true,
//     width: 180,
//   },
//   {
//     field: "phone",
//     headerName: "Phone",
//     sortable: false,
//     disableColumnMenu: true,
//     width: 100,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     sortable: false,
//     disableColumnMenu: true,
//     width: 70,
//   },
//   {
//     field: "category",
//     headerName: "Category",
//     sortable: false,
//     disableColumnMenu: true,
//     flex: 1,
//     minwidth: 300,
//   },
//   {
//     field: "type",
//     headerName: "Type",
//     sortable: false,
//     disableColumnMenu: true,
//     width: 70,
//   },
// ];

export default function SearchHospital() {
  const {
    data: originalData,
    searchFor,
    setSearchFor,
    handleFilter,
  } = useSearchHospitalHook();
  console.log("originalData", originalData);
  // const rows = originalData?.map((item) => {
  //   return (
  //     {
  //       id: 1,
  //       field: "Blood_Bank_Name",
  //       headerName: originalData?.Blood_Bank_Name,
  //       width: 200,
  //     },
  //     { id: 2, field: "State", headerName: originalData?.State, width: 120 },
  //     { id: 3, field: "City", headerName: originalData?.city, width: 150 },
  //     { id: 4, field: "Pincode", headerName: originalData?.Pincode, width: 120 }
  //     );
  //   });
  //   console.log('rows', rows)
  const rows = originalData?.map((item, index) => {
    return {
      id: index + 1,
      Hospital_Name: item.Hospital_Name,
      State: item.State,
      District: item.District,
      Address:item.Address,
      Pin_Code: item.Pin_Code,
      Helpline_No: item.Helpline_No,
    };
  });

  const [seachSpinner, setseachSpinner] = useState(false);
  // const [requestSpinner, setRequestSpinner] = useState(false);
  // const [pagination, setPagination] = useState({
  //   totalRows: 0,
  //   Loading: false,
  //   totalPages: 0,
  //   page: 0,
  // });
  const pagination = {
    page: 0,
    totalPages: 1,
    totalRows: 1,
    Loading: false,
  };
  // const [foundDonors, setFoundDonors] = useState([]);

  const { data } = State_City_Data;
  const State = Object.keys(data);
  const [selectedState, setSelectedState] = useState();
  const [cityList, setcityList] = useState([]);

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
      <div
        className="search_donor_container"  style={{ backgroundImage: `url(${  process.env.PUBLIC_URL + "/assets/search-bg.svg" })` }}>
        <section>
          <h1>
            <span>Search</span> for <span>Hospital</span>
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
                  District
                </InputLabel>
                <Select
                  id="District"
                  labelId="City-label"
                  name="District"
                  label="District*"
                  value={searchFor.district}
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
                    Select District
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
            <Button
              type="submit"
              variant="contained"
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
              onClick={() => handleFilter()}
            >
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
          </div>
        </section>
      </div>
    </>
  );
}
