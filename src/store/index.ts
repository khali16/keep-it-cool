import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import expressSlice from "./express-slice";
import dateSlice from "./date-slice";

const reducer = combineReducers({
  expressSlice,
  dateSlice,
});

const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
