import { createSlice, original } from '@reduxjs/toolkit';
import { getMusic } from './getThunk';

const initialState = {
    originalData: [],
    musicData: [],
    loading: true,
    error: null,
    isOpen: false,
    nowDate: null,
    newMusicData: [],
    currentMusic: null,
};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        onDate: (state, action) => {
            const now = new Date();
            const y = now.getFullYear();
            const m = now.getMonth() + 1;
            const d = now.getDate();
            state.nowDate = `${y}년 ${m}월 ${d}일`;
        },
        onLike: (state, action) => {
            const id = action.payload;
            const newItem = state.musicData.find((music) => music.id === id);
            if (newItem && newItem.done) {
                newItem.like = newItem.like - 1;
                // newItem.done = false;
            } else if (newItem && !newItem.done) {
                newItem.like = newItem.like + 1;
                // newItem.done = true;
            }
            newItem.done = !newItem.done;
        },
        onInter: (state, action) => {
            const id = action.payload;
            const newItem = state.musicData.find((music) => music.id === id);
            if (newItem && !newItem.isInter) {
                newItem.isInter = true;
                state.newMusicData.push(newItem);
            } else {
                newItem.isInter = false;
                state.newMusicData = state.newMusicData.filter((item) => item.id !== id);
            }
        },
        onModal: (state, action) => {
            const id = action.payload;
            if (id) {
                const newItem = state.musicData.find((music) => music.id === id);
                state.currentMusic = newItem;
            }
            state.isOpen = !state.isOpen;
        },
        onSearch: (state, action) => {
            //Array.prototype.includes()
            //String.prototype.toLowerCase()
            const text = action.payload;
            state.musicData = state.originalData.filter((item) =>
                item.title.toLowerCase().includes(text.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMusic.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMusic.fulfilled, (state, action) => {
                state.musicData = action.payload;
                state.originalData = action.payload;
                state.loading = false;
            })
            .addCase(getMusic.rejected, (state, action) => {
                state.loading = true;
                state.error = '에러발생';
            });
    },
});

export const musicActions = musicSlice.actions;
export default musicSlice.reducer;
