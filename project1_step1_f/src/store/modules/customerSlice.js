import { createSlice, current } from '@reduxjs/toolkit';

import customerdata from '../../assets/api/customerdata';

const initialState = {
    customerData: customerdata,
    current: null,
};
let no = initialState.customerData.length + 1;
export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        add: (state, action) => {
            const user = action.payload;
            state.customerData.push({ id: no++, ...user });
            // state.customerData = [...state.customerData, {}];
        },
        del: (state, action) => {
            const id = action.payload;
            state.customerData = state.customerData.filter((item) => item.id !== id);
        },
        edit: (state, action) => {
            state.current = action.payload;
        },
        update: (state, action) => {
            const user = action.payload;
            state.customerData = state.customerData.map((item) =>
                item.id === user.id ? user : item
            );
        },
    },
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
