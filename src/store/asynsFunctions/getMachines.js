import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getMachines = createAsyncThunk('app/getMachines', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/app/machines`)
    return res.data
})

export default getMachines