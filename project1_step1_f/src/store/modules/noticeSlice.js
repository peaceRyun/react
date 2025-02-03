import { createSlice } from '@reduxjs/toolkit';
import noticedata from '../../assets/api/noticedata';

const initialState = {
    noticeData: noticedata,
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        onLoad: (state, action) => {
            // 처음 정렬 내림차순
            state.noticeData = [...noticedata].sort((a, b) => b.id - a.id);
        },
        onSort: (state, action) => {
            //value 값에 의한 오름차순
        },
        onSearch: (state, action) => {
            //제목에 대한 검색 (filter 사용)
        },
    },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
