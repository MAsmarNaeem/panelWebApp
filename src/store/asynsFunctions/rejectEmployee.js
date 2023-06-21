import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const rejectEmployee = createAsyncThunk('app/rejectEmployee/u', async () => {
    const res = await axios.post('http://localhost:1000/app/rejectemplyee')
    return res.data
})

export default rejectEmployee