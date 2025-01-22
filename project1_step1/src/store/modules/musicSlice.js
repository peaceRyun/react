import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getxxx.pending, (state, action) => {})
            .addCase(getxxx.fulfilled, (state, action) => {})
            .addCase(getxxx.rejected, (state, action) => {});
    },
});

export const musicActions = musicSlice.actions;
export default musicSlice.reducer;
