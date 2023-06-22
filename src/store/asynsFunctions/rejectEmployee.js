import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const rejectEmployee = createAsyncThunk('app/rejectEmployee/u', async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/app/rejectemplyee`)
    return res.data
})

export default rejectEmployee