import { configureStore } from '@reduxjs/toolkit';
import aboutR from './modules/aboutSlice';
import musicR from './modules/musicSlice';
import noticeR from './modules/noticeSlice';
import customerR from './modules/customerSlice';
import authR from './modules/authSlice';

export const store = configureStore({
    reducer: {
        aboutR,
        musicR,
        noticeR,
        customerR,
        authR,
    },
});
