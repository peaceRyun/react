import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    joinData: [
        {
            id: 1,
            username: '홍길동',
            tel: '010-0000-0000',
            email: 'aaa@naver.com',
            pw: 'a1234',
        },
    ],
    authed: false,
    user: null,
};
let no = initialState.joinData.length + 1;
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {},
        logout: (state, action) => {},
        signup: (state, action) => {
            const user = action.payload;
            state.joinData.push({ id: no++, ...user });
            //state.joinData = [...state.joinData, {id:no++, ...user}]
        },
    },
});

export const authActins = authSlice.actions;
export default authSlice.reducer;
