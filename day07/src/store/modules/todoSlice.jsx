import { createSlice } from '@reduxjs/toolkit';
//api -> todoData.js를 불러오기
//포폴할때는 편하게 할 경우 - data 저장소를 따로 만들어서
// 깃주소 불러오기
//이미지 경로 문제 -> 이미지 저장소를 깃에 올리고 주소 복사 api
import dataList from '../../assets/api/todoData';

const initialState = {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : dataList,
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
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        onDel: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
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
