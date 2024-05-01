import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './features/categorySlice'
import gameReducer from './features/gamesSlice'
import titleReducer from './features/titleSlice'

export const store = configureStore({
  reducer: {
    categoryReducer,
    gameReducer,
    titleReducer,
  },
});

export default store