import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload
    },
    filterCountries(state, action) {
      // state.countries = action.payload.countries.filter(country => country.name.toLowerCase().includes(action.payload.value))
      state.countries = action.payload.countries.filter(country => country.name.toLowerCase().includes(action.payload.value))
      console.log(state.countries)
    }
  },
})

export default countriesSlice
export const countriesActions = countriesSlice.actions