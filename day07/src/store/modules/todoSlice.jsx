import { createSlice } from '@reduxjs/toolkit';

const dataList = [
    { id: 1, text: '홍길동1', isChk: false },
    { id: 2, text: '홍길동2', isChk: true },
    { id: 3, text: '홍길동3', isChk: false },
    { id: 4, text: '홍길동4', isChk: false },
    { id: 5, text: '홍길동5', isChk: false },
];
const initialState = {
    todos: dataList,
    text: '',
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        onAdd: (state, action) => {},
        onDel: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        onMod: (state, action) => {},
        changeInput: (state, action) => {},
    },
});
// export const { 함수 } = todosSlice.actions
export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
