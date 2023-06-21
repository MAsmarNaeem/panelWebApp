import { createSlice } from "@reduxjs/toolkit";
import getPendingEmployees from "../asynsFunctions/getPendingEmployees";

const pendingEmployees = createSlice({
    name: "pendingEmployees",
    initialState: [],
    reducers: {
        updatePendingEmployees: (state, action) => {
            let updatedData = [...state, action.payload]
            return updatedData
        },
        reduceEmployee: (state, action) => {
            let employees = []
            state.forEach((employee) => {
                if (employee._id !== action.payload) {
                    console.log('payload',action.payload);
                    employees.push(employee)
                }
            })
            return employees
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPendingEmployees.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const { updatePendingEmployees , reduceEmployee } = pendingEmployees.actions

export default pendingEmployees.reducer