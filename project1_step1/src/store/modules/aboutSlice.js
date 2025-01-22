import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const aboutSlice = createSlice({
    name: 'aboue',
    initialState,
    reducers: {},
});

export const aboutActions = aboutSlice.actions;
export default aboutSlice.reducer;
