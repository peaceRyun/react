import { useDispatch } from 'react-redux';
import { todosActions } from '../../store/modules/todoSlice';

const TodoItem = ({ todo }) => {
    const { id, text, isChk } = todo;
    const dispatch = useDispatch();
    return (
        <li style={{ color: isChk ? '#f00' : '#000' }}>
            <input type='checkbox' checked={isChk} onChange={() => dispatch(todosActions.onMod(id))} />
            {/* <input type='checkbox' checked={isChk} onChange={(e) => dispatch(todosActions.onMod(e.target.checked))} /> */}
            {id} 번 / {text}
            <button onClick={() => dispatch(todosActions.onDel(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;
