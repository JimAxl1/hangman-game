import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: 'games',
  initialState: [],
  reducers: {
    selectGame: (state, action) => {
      return state = action.payload
    }
  },
});

export const { selectGame, updateList } = gameSlice.actions;

export default gameSlice.reducer;