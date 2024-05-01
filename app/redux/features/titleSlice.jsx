import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
  name: 'title',
  initialState: '',
  reducers: {
    selectTitle: (state, action) => {
      return state = action.payload
    }
  },
});

export const { selectTitle } = titleSlice.actions;

export default titleSlice.reducer;