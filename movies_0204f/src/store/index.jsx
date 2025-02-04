import { configureStore } from '@reduxjs/toolkit';
import aboutR from './modules/aboutSlice';
import musicR from './modules/musicSlice';
import noticeR from './modules/noticeSlice';
import customerR from './modules/customerSlice';
import cardR from './modules/cardSlice';
import authR from './modules/authSlice';
import pagenationR from './modules/pagenationSlice';
import commonR from './modules/commonSlice';
import movieR from './modules/movieSlice';

export const store = configureStore({
    reducer: {
        aboutR,
        musicR,
        noticeR,
        customerR,
        cardR,
        authR,
        pagenationR,
        commonR,
        movieR,
    },
});
