import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';

const TodoUl = styled.ul`
    border: 1px solid #999;
    padding: 20px;
    li {
        line-height: 40px;
        border-bottom: 1px solid #dcdcdc;
    }
`;

const TodoList = () => {
    return (
        <TodoUl>
            <TodoItem />
        </TodoUl>
    );
};

export default TodoList;
