import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
    const { id, text, isChk } = todo;
    const dispatch = useDispatch();
    return (
        <li style={{ color: '#000' }}>
            <input type='checkbox' checked={isChk} />
            {id} 번 / {text}
            <button onClick={() => dispatch.todosActions(onDel())}>삭제</button>
        </li>
    );
};

export default TodoItem;
