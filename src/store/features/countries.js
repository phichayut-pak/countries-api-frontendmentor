import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: []
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    getSingleCountry(state, action) {
      state.countries.find(country => country.name === action.countryName)
    }
  }
})

export default countriesSlice
export const countriesActions = countriesSlice.actions