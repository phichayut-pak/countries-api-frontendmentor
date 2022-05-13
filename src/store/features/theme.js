import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme(state, action) {
      state.mode = action.payload
    }
  }
})

export default themeSlice
export const themeActions = themeSlice.actions