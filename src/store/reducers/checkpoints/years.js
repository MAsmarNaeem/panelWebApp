import { createSlice } from "@reduxjs/toolkit";

const years = createSlice({
    name: 'years',
    initialState: {},
    reducers: {
        setYears: (state, action) => {
            return {
                user: action.payload
            }
        }
    }
})

export const { setYears } = years.actions

export default years.reducer