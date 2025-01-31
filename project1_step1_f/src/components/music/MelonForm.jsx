import { useEffect, useState } from 'react';
import { MelonFormContainer } from './style';
import { useDispatch } from 'react-redux';
import { musicActions } from '../../store/modules/musicSlice';

const MelonForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(musicActions.onSearch(text));
    };

    //실시간검색
    useEffect(() => {
        dispatch(musicActions.onSearch(text));
    }, [text]);

    return (
        <MelonFormContainer className="MelonForm" onSubmit={onSubmit}>
            <input
                type="text"
                value={text}
                onChange={changeInput}
                placeholder="곡명을 검색하세요"
            />
        </MelonFormContainer>
    );
};

export default MelonForm;
