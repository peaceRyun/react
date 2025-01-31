import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMusic = createAsyncThunk('music/getMusic', async () => {
    const url = `https://gist.githubusercontent.com/eun00/5c694a8e1a78f331e463d214bbc4eca3/raw/022d477bb0a525643a88b477561bf01d20282cf1/musicDate`;
    try {
        const res = await axios.get(url);
        return res.data.music;
    } catch (error) {
        console.log(error);
    }
});
