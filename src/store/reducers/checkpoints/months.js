import { createSlice } from "@reduxjs/toolkit";

const months = createSlice({
    name: "months",
    initialState: [],
    reducers: {
        setMonths: (state, action) => {
            // let arr = []
            let months = [...state, action.payload]
            state.forEach((u)=>{
                u?.months?.forEach((month)=>{
                    console.log(month);

                })
                // console.log(action.payload);
            //    console.log(u);
            })
            // console.log(arr);
            return months
        }
    }
})

export const { setMonths } = months.actions

export default months.reducer