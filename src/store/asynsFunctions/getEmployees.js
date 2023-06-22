import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getEmployees = createAsyncThunk('app/getEmployees', async () => {
    const res = await axios.get(`${process.env.API_KEY}/app/employees`)
    return res.data
})

export default getEmployees