import { createSlice } from "@reduxjs/toolkit";

const today: Date = new Date();
const formattedDate =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const dateSlice = createSlice({
  name: "dateSlice",
  initialState: { selectedDate: formattedDate },
  reducers: {
    saveDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export default dateSlice.reducer;
export const { saveDate } = dateSlice.actions;
