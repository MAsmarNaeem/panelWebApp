import { createSlice } from "@reduxjs/toolkit";

const years = createSlice({
    name: 'years',
    initialState: {},
    reducers: {
        setYears: (state, action) => {
            return {
                user: action.payload
            }
        },
        setEmpty: (state, action) => {
            let data = []
            return data
        }
    }
})

export const { setYears , setEmpty} = years.actions

export default years.reducer