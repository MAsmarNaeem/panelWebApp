import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getEmployees = createAsyncThunk('app/getEmployees', async () => {
    console.log(`${process.env.REACT_APP_API_KEY}/app/employees`);
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/app/employees`)
    return res.data
})

export default getEmployees