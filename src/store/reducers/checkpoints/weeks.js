import { createSlice } from "@reduxjs/toolkit";

const weeks = createSlice({
    name: "weeks",
    initialState: [],
    reducers: {
        setWeeks: (state, action) => {
            let data = []
            let userData = {
                year: action.payload.year,
                month: action.payload.month,
                weeks: action.payload.weeks.weeks
            }
            if (state.length === 0) {
                data = [...state, userData]
            } else {
                const existingData = state.find(item => item.month === action.payload.month);
                if (existingData) {
                    let updatedData = []
                    state.forEach((item) => {
                        if (item.month === action.payload.month) {
                            updatedData.push({
                                year: action.payload.year,
                                month: action.payload.month,
                                weeks: action.payload.weeks.weeks
                            })
                        } else {
                            updatedData.push(item)
                        }
                    })
                    data = [...updatedData]
                } else {
                    data = [...state, {
                        year: action.payload.year,
                        month: action.payload.month,
                        weeks: action.payload.weeks.weeks
                    }]
                }

            }


            return data
        }
    }
})

export const { setWeeks } = weeks.actions

export default weeks.reducer