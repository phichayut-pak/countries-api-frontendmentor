import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./features/countries";
import themeSlice from "./features/theme";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    theme: themeSlice.reducer
  }
})

export default store
