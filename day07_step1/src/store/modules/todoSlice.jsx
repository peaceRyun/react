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

// sql id로 처리
let no = initialState.todos.length + 1;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            //push 가능 => 원본이 변경된다 js Array 성격
            //push : toolkit 에서 관리한다 -> 불변성 유지 처리해준다.
            // state.todos.push({ id: no++, text: action.payload, isChk: false });
            state.todos = [...state.todos, { id: no++, text: action.payload, isChk: false }];
        },
        onDel: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        onMod1: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, isChk: !todo.isChk } : todo
            );
        },
        onMod: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                //todo 값이 존재하면
                todo.isChk = !todo.isChk;
            }
        },
        changeInput: (state, action) => {
            state.text = action.payload;
        },
    },
});
// export const { 함수 } = todosSlice.actions
export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
