import { createSlice } from "@reduxjs/toolkit";

const authInfo = createSlice({
    name: "authInfo",
    initialState: { user: 'unauthrized' },
    reducers: {
        setUser: (state, action) => {
            return {
                user: action.payload
            }
        }
    }
})

export const { setUser } = authInfo.actions

export default authInfo.reducer