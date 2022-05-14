import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  searchedBy: '',
  filteredBy: ''

}

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload
    },
    searchCountries(state, action) {
      state.searchedBy = action.payload
    },
    filterCountries(state, action) {
      state.filteredBy = action.payload
    }
  },
})

export default countriesSlice
export const countriesActions = countriesSlice.actions