import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPendingEmployees = createAsyncThunk('app/getEmployees/u', async () => {
    const res = await axios.get(`${process.env.API_KEY}/app/pendingemployee`)
    return res.data
})

export default getPendingEmployees