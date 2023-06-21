import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getDevices = createAsyncThunk('app/getDevices', async () => {
    const res = await axios.get('http://localhost:1000/app/devices')
    return res.data
})

export default getDevices