import { createAsyncThunk, createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import axios from 'axios'

interface FluidsMeasurement {
    data: []
}

const fetchMeasurement = createAsyncThunk("fetch", async()=>{
    const request = await axios.get('/api')
   .then((response) => {
       return(response.data)
   })
   return request
})

const updateMeasurement = createAsyncThunk("postReq", async ({date, fluid, cups} : {date: string, fluid: string, cups: number}) => {
    await axios.post('/create', {date, fluid, cups})
})

const slice = createSlice({
    name: "expressSlice",
    initialState: [] as FluidsMeasurement[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateMeasurement.fulfilled, (state, action) => {
            console.log("udało się")
        })
        builder.addCase(fetchMeasurement.fulfilled, (state, action: any)=>{
            console.log("payload:", action.payload)
            state.push(action.payload);
            console.log("state:", current(state))
        })
    }
})

export default slice.reducer
export {updateMeasurement, fetchMeasurement};