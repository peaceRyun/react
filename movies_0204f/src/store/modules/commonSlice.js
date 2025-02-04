import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    bgdata: [
        {
            id: 1,
            bgurl: '/images/subvisual1.jpg',
            path: 'music',
            title: 'Melone 인기차트',
        },
        { id: 2, bgurl: '/images/subvisual8.png', path: 'about', title: 'Artist(서현진) 소개' },
        { id: 3, bgurl: '/images/subvisual4.jpg', path: 'artist', title: '아티스트 갤러리' },
        { id: 4, bgurl: '/images/subvisual5.jpg', path: 'gallery', title: '음악 갤러리' },
        { id: 5, bgurl: '/images/subvisual6.jpg', path: 'notice', title: '게시판 Q&A' },
        { id: 6, bgurl: '/images/subvisual7.jpg', path: 'customer', title: '고객 문의' },
    ],
    obj: null,
};
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        onLoad: (state, action) => {
            const url = new URL(window.location.href); //객체 생성
            const pathname = url.pathname; // -> /about
            // pathname.split('/')[1]; => about
            const newpath = pathname.split('/').pop();
            state.obj = state.bgdata.find((item) => item.path === newpath);
        },
        onVisual: (state, action) => {
            const newpath = action.payload;
            state.obj = state.bgdata.find((item) => item.path === newpath);
        },
    },
});
export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
