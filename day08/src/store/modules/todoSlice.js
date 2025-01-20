import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from './getThunk';

const initialState = {
    data: [],
    loading: true,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //함수명:(state, action) => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state, action) => {
                //대기
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                //성공
                state.data = action.payload;
            })
            .addCase(getTodos.rejected, (state, action) => {
                //실패
            });
    },
});

export const todosActions = todoSlice.actions;
export default todoSlice.reducer;
