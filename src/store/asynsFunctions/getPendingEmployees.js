import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPendingEmployees = createAsyncThunk('app/getEmployees/u', async () => {
    console.log(`${process.env.REACT_APP_API_KEY}/app/pendingemployee`);
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/app/pendingemployee`)
    return res.data
})

export default getPendingEmployees