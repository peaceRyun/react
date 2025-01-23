import { createSlice } from '@reduxjs/toolkit';
import { getMusic } from './getThunk';
const initialState = {
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
            if (newItem) {
                newItem.done = !newItem.done;
                newItem.like = newItem.done ? newItem.like + 1 : newItem.like - 1;
            }
        },
        onInter: (state, action) => {
            const id = action.payload;
            const newItem = state.musicData.find((music) => music.id === id);
            // if (newItem) {
            //     newItem.isInter = !newItem.isInter;
            // }
            // if (newItem.isInter) {
            //     state.newMusicData.push(newItem);
            // } else {
            //     state.newMusicData = state.newMusicData.filter((music) => music.id !== id);
            // }
            if (newItem && !newItem.isInter) {
                newItem.isInter = true;
                state.newMusicData.push(newItem);
            } else {
                newItem.isInter = false;
                state.newMusicData = state.newMusicData.filter((music) => music.id !== id);
            }
        },
        onModal: (state, action) => {
            const id = action.payload;
            state.isOpen = !state.isOpen;
            if (id) {
                const newItem = state.musicData.find((music) => music.id === id);
                state.currentMusic = newItem;
            }
        },
        onSearch: (state, action) => {
            const id = action.payload;
            const keyword = action.payload;
            if (keyword) {
                state.musicData = state.musicData.filter(
                    (music) => music.id === id && music.title.includes(keyword) === true
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMusic.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMusic.fulfilled, (state, action) => {
                state.loading = false;
                state.musicData = action.payload;
            })
            .addCase(getMusic.rejected, (state, action) => {
                state.loading = true;
                state.error = '주소가 잘못되었습니다.';
            });
    },
});

export const musicActions = musicSlice.actions;
export default musicSlice.reducer;
