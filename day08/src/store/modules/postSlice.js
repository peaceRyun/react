import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI' 외부 api 만들어서 불러오기
import axios from 'axios';
export const getPost = createAsyncThunk('posts/getPost', async (text) => {
    const url = `https://hn.algolia.com/api/v1/search?query=${text}`;
    const response = await axios.get(url);
    return response.data.hits;
});
const initialState = {
    post: [],
    loading: true,
    error: null,
    text: '',
};
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        //함수명:(state,action) => {}
        changeInput: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state, action) => {
                //대기
            })
            .addCase(getPost.fulfilled, (state, action) => {
                //성공
                state.post = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                //실패
            });
    },
});
export const postActions = postSlice.actions;
export default postSlice.reducer;
