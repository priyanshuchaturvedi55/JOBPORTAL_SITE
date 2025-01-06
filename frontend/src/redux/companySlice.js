import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
      singleCompany: null,
      companies: [],
      searchCompanies:"", // Ensure this is initialized as an empty array
    },
    reducers: {
      setSingleCompany: (state, action) => {
        state.singleCompany = action.payload;
      },
      setCompanies: (state, action) => {
        state.companies = action.payload; // Make sure this updates the state correctly
      },
      setSearchCompanies: (state, action) => {
        state.searchCompanies = action.payload; // Make sure this updates the state correctly
      },
    },
  });
  
  export const { setSingleCompany, setCompanies,setSearchCompanies } = companySlice.actions;
  export default companySlice.reducer;
  
