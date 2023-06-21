import { createSlice } from "@reduxjs/toolkit";

const months = createSlice({
    name: "months",
    initialState: [],
    reducers: {
        setMonths: (state, action) => {
            let data = []
            if (!data.length) {
                data.push({
                    year: action.payload.year,
                    months: action.payload.months.months
                })
            }
            state.forEach((obj) => {
                if (obj.year !== action.payload.year) {
                    data.push(obj)
                }
            })
            return data
        }
    }
})

export const { setMonths } = months.actions

export default months.reducer