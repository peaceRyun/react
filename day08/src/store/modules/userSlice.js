import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI' 외부 api 만들어서 불러오기
import axios from 'axios';

export const getUser = createAsyncThunk('users/getUser', async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await axios.get(url);
    return response.data;
});
const initialState = {
    user: [],
    loading: true,
    error: null,
};
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        //함수명:(state,action) => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state, action) => {
                //대기
            })
            .addCase(getUser.fulfilled, (state, action) => {
                //성공
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                //실패
            });
    },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
