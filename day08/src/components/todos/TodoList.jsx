import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodos, todosActions } from '../../store/modules/todoSlice';

const TodoUl = styled.ul`
    border: 1px solid #999;
    padding: 20px;
    li {
        line-height: 40px;
        border-bottom: 1px solid #dcdcdc;
    }
`;

const TodoList = () => {
    const { data } = useSelector((state) => state.todoR);
    //비동기는 useEffect -> 함수호출
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);
    return (
        <TodoUl>
            {data.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </TodoUl>
    );
};

export default TodoList;
