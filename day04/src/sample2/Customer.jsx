import { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';

import './style.scss';

//추가, 수정 컴포넌트를 두개로 만들 때
const dataList = [
    { id: 1, name: '김태희', addr: '서울시 강남구' },
    { id: 2, name: '홍길동', addr: '서울시 서초구' },
    { id: 3, name: '송혜교', addr: '서울시 용산구' },
    { id: 4, name: '전지현', addr: '서울시 강동구' },
    { id: 5, name: '김철수', addr: '서울시 강서구' },
];

const Customer = () => {
    // const [data, setData] = useState(dataList);
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || dataList);
    const [isEdit, setIsEdit] = useState(false);
    const [current, setCurrent] = useState({});
    const no = useRef(data.length + 1);

    // 삭제
    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    // 추가
    const onAdd = (user) => {
        setData([...data, { id: no.current++, ...user }]);
        // user.id = no.current++
        // setData([...data, user])
    };
    // 수정
    const onEdit = (user) => {
        setIsEdit(true);
        setCurrent(user);
    };
    // 내용 업데이트
    const onUpdate = (user) => {
        setIsEdit(false);
        setData(data.map((item) => (item.id === user.id ? user : item)));
    };

    //업데이트
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    return (
        <div className='Customer'>
            {isEdit ? (
                <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} />
            ) : (
                <AddUser onAdd={onAdd} />
            )}
            <ListUser data={data} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;
