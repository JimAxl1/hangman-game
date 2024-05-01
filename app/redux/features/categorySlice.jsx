import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: 'category',
  initialState: null,
  reducers: {
    selectCategory: (state, action) => {
      return state = action.payload
    }
  },
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;