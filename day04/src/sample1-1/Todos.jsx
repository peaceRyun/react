import { useEffect, useRef, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todos.scss';

const tododata = [
    { id: 1, text: '안녕하세요', isDone: false },
    { id: 2, text: '점심시간', isDone: true },
];

const Todos = () => {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || tododata);
    //고유번호
    const no = useRef(todos.length + 1);
    /*
        [
            {id:1, text:내용, isDone:false}
        ]
    */
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    //삭제
    const onDel = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    //추가
    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: no.current++,
                text,
                isDone: false,
            },
        ]);
    };

    //수정
    const onMod = (id) => {
        setTodos(todos.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
    };

    return (
        <div className='Todos '>
            <h2> 일정관리 </h2>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onMod={onMod} />
        </div>
    );
};

export default Todos;
