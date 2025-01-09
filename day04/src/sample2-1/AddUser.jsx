import { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
    const [user, setUser] = useState({
        name: '',
        addr: '',
    });
    const nameRef = useRef();
    //구조분해
    const { name, addr } = user;

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault(); //이벤트 취소
        if (!name.trim() || !addr.trim()) return;
        // onAdd(name, addr)
        onAdd(user);
        setUser({
            name: '',
            addr: '',
        });
        nameRef.current.focus();
    };
    return (
        <form className='form' onSubmit={onSubmit}>
            <h2>드라마 명단 추가</h2>
            <p>
                <label htmlFor=''>이름</label>
                <input type='text' name='name' value={name} onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label htmlFor=''>주소</label>
                <input type='text' name='addr' value={addr} onChange={changeInput} />
            </p>
            <p>
                <button type='submit'>추가</button>
            </p>
        </form>
    );
};

export default AddUser;
