import { createSlice } from "@reduxjs/toolkit";
import getDevices from "../asynsFunctions/getDevices";

const devices = createSlice({
    name: "devices",
    initialState: [],
    reducers: {
        updatedevices: (state, action) => {
            let updatedData = [...state, action.payload]
            return updatedData
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDevices.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const { updatedevices } = devices.actions

export default devices.reducer