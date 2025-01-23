import { useEffect, useState } from 'react';
import { MelonFormContainer } from './style';
import { useDispatch } from 'react-redux';
import { musicActions } from '../../store/modules/musicSlice';

const MelonForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const changeInput = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(musicActions.onSearch(text));
    };

    return (
        <MelonFormContainer className='MelonForm' onSubmit={onSubmit}>
            <input type='text' placeholder='곡명을 검색하세요' value={text} onChange={changeInput} />
        </MelonFormContainer>
    );
};

export default MelonForm;
