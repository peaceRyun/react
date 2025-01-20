import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './getThunk';

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
