import { createSlice } from '@reduxjs/toolkit';
//자바스크립트 영역 toolkit 내부에 지원해준다.
const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            //action.payload => UI디자인에서 값을 넘긴 것을 받기
            // state.키 => initialState에 초기변수 연결
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        onReset: (state, action) => {
            state.count = 0;
        },
    },
});

export const { increment, decrement, onReset } = counterSlice.actions;

export default counterSlice.reducer;
