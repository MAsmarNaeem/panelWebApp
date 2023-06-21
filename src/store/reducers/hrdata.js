import { createSlice } from "@reduxjs/toolkit";
import getEmployees from "../asynsFunctions/getEmployees";

const employees = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        updateEmployees: (state, action) => {
            let updatedEmployees = [...state, action.payload]
            return updatedEmployees
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const { updateEmployees } = employees.actions

export default employees.reducer