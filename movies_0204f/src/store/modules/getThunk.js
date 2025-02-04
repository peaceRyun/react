import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
    api_key: 'ddf6521c43c2e03f59d2767f109aaaa4',
    lenguage: 'ko-KR',
    genres: 28,
};

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE'
//     }
//   };

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?`;
    try {
        // const res = await axios.get(url);
        const res = await axios.get(url, { params: options });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});

export const getMusic = createAsyncThunk('music/getMusic', async () => {
    const url = `https://gist.githubusercontent.com/eun00/5c694a8e1a78f331e463d214bbc4eca3/raw/022d477bb0a525643a88b477561bf01d20282cf1/musicDate`;
    try {
        const res = await axios.get(url);
        return res.data.music;
    } catch (error) {
        console.log(error);
    }
});
