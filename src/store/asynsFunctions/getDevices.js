import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getDevices = createAsyncThunk('app/getDevices', async () => {
    const res = await axios.get(`${process.env.API_KEY}/app/devices`)
    return res.data
})

export default getDevices