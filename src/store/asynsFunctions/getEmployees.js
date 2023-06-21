import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getEmployees = createAsyncThunk('app/getEmployees', async () => {
    const res = await axios.get('http://localhost:1000/app/employees')
    return res.data
})

export default getEmployees