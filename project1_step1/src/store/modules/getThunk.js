import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//https://gist.githubusercontent.com/eun00/5c694a8e1a78f331e463d214bbc4eca3/raw/cf7bbad0f2d0768b9d68ca12f3a6a9aa1b9623ec/musicDate
export const getxxx = createAsyncThunk('xxx/getxxx', async () => {
    const url = ``;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
});
