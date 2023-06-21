import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getMachines = createAsyncThunk('app/getMachines', async () => {
    const res = await axios.get('http://localhost:1000/app/machines')
    return res.data
})

export default getMachines