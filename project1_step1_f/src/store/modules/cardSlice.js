import { createSlice } from '@reduxjs/toolkit';
import carddata from '../../assets/api/carddata';

const postsPerPage = 6;

const initialState = {
    cardData: carddata,
    loading: false,
    data: [],
    page: 1,
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        startPage(state, action) {
            state.loading = false;
            state.data = [];
            state.page = 1;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        loadData(state, action) {
            const startIndex = (state.page - 1) * postsPerPage;
            const endIndex = state.page * postsPerPage;
            const currentData = state.cardData.slice(startIndex, endIndex);
            state.data = [...state.data, ...currentData];
            state.loading = false;
        },
    },
});

export const cardActions = cardSlice.actions;
export default cardSlice.reducer;
