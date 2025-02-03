import { useDispatch } from 'react-redux';
import { NoticeFormCom } from './style';
import { useState } from 'react';
import { noticeActions } from '../../store/modules/noticeSlice';

const NoticeForm = () => {
    const [text, setText] = useState();
    const dispatch = useDispatch();
    const changeText = (e) => {
        const { value } = e.target;
        //글자 쓰기 처리
        setText(value);
    };
    const changeSort = (e) => {
        const { value } = e.target;
        //정렬 select 부분 체인지이벤트처리
        if (value !== '') {
            dispatch(noticeActions.onSort(value));
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        //값 전달
    };
    return (
        <NoticeFormCom>
            <p>
                <label htmlFor='search' className='hide'>
                    검색
                </label>
                <input type='text' name='' id='search' onChange={changeText} />
                <button type='submit'>검색</button>
            </p>
            <p>
                <select onChange={changeSort}>
                    <option value=''>--- 정렬 --- </option>
                    <option value='date'> 최신작성일 </option>
                    <option value='id'> 번호 </option>
                    <option value='내용'> 내용 </option>
                </select>
            </p>
        </NoticeFormCom>
    );
};

export default NoticeForm;
