import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchMeasurement = createAsyncThunk("fetch", async () => {
  const request = await axios.get("/api").then((response) => {
    return response.data;
  });
  return request;
});

interface NewMeasurement {
  date: string;
  fluid: string;
  cups: number;
}
//TODO why is awaity hewre?
const updateMeasurement = createAsyncThunk(
  "postReq",
  async ({ date, fluid, cups }: NewMeasurement) => {
    await axios.post("/create", { date, fluid, cups });
  }
);

const slice = createSlice({
  name: "expressSlice",
  initialState: { drinks: [] as any },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeasurement.fulfilled, (state, action: any) => {
      state.drinks = action.payload;
    });
  },
});

export default slice.reducer;
export { updateMeasurement, fetchMeasurement };
