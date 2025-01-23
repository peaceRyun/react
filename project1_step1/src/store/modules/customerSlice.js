import { createSlice } from '@reduxjs/toolkit';
import customerdata from '../../assets/api/customerdata';

const initialState = {
    customerData: customerdata,
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
