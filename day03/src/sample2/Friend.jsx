import { useState } from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import dataList from './friendData';

import './style.css';
import { useRef } from 'react';

const Friend = () => {
    const [data, setData] = useState(dataList);
    const [isShow, setIsShow] = useState(false);

    const changeInput = () => {
        setIsShow(!isShow);
    };

    const no = useRef(data.length + 1);

    //삭제
    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    //모두 삭제
    const onAllDel = () => {
        setData([]);
    };
    //초기 복구
    const onRestore = () => {
        setData(dataList);
    };
    //추가
    const onAdd1 = (name, age, image) => {
        setData([...data, { id: no.current++, name, age, image }]);
    };
    const onAdd = (obj) => {
        obj.id = no.current++;
        setData([...data, obj]);
    };
    return (
        <div className='wrap'>
            <h1>친구들 총인원 : {data.length}</h1>
            <p className='chk'>
                <input type='checkbox' checked={isShow} onChange={changeInput} />
                <span>추가</span>
            </p>
            <FriendList data={data} onDel={onDel} />
            <p className='btn'>
                <button onClick={onAllDel}>모두 삭제</button>
                <button onClick={onRestore}>초기 복구</button>
            </p>
            {isShow ? <FriendInput onAdd={onAdd} /> : null}
        </div>
    );
};

export default Friend;
