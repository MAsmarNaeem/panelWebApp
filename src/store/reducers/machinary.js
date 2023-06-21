import { createSlice } from "@reduxjs/toolkit"
import getMachines from "../asynsFunctions/getMachines"

const machines = createSlice({
    name: "machines",
    initialState: [],
    reducers: {
        updateMachines: (state, action) => {
            let updatedData = [...state, action.payload]
            return updatedData
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMachines.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const { updateMachines } = machines.actions

export default machines.reducer