import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store/modules/todoSlice';
import { useState } from 'react';

const TodoInput = () => {
    // const [text, setText] = useState(''); 내부에서 changeInput 처리
    const { text } = useSelector((state) => state.todosR);
    const dispatch = useDispatch();
    //slice 아닌 내용에서 changeInput 처리를 추천
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(todosActions.onAdd(text));
        dispatch(todosActions.changeInput(''));
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                value={text}
                onChange={(e) => {
                    dispatch(todosActions.changeInput(e.target.value));
                }}
            />
            <button type='submit'>추가</button>
        </form>
    );
};

export default TodoInput;
