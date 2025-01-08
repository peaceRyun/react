import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todos.scss';
import { useRef } from 'react';

const Todos = () => {
    const [data, setData] = useState([
        { id: 1, text: '안녕하세요', isDone: false },
        { id: 2, text: '점심시간', isDone: true },
    ]);
    //고유번호
    const no = useRef(data.length + 1);

    // [{ id: 1, text: 내용 isDone:false}];
    //삭제
    const onDel = (id) => {
        alert('삭제');
        setData(data.filter((item) => item.id !== id));
    };
    //추가
    const onAdd = (text) => {
        setData([...data, { id: no.current++, text, isDone: false }]);
    };
    //수정 //약속 거의 공식처럼 씀
    const onMod = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
    };
    return (
        <div className='Todos'>
            <h2>일정관리</h2>
            <TodoInput onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onMod={onMod} />
        </div>
    );
};

export default Todos;
