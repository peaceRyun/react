import { useRef } from 'react';
import { useState } from 'react';

const FriendInput = ({ onAdd }) => {
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     if (!text.trim()) return;
    //     onAdd();
    // };
    const nameRef = useRef();

    const [user, setUser] = useState({
        name: '',
        age: '',
        image: '',
    });

    const { name, age, image } = user;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // onAdd1(name, age, image)
        if (!name.trim() || !age.trim() || !image.trim()) return;
        setUser({
            name: '',
            age: '',
            image: '',
        });
        onAdd(user);
        nameRef.current.focus();
    };

    return (
        <form className='formadd' onSubmit={onSubmit}>
            <p>
                <label htmlFor=''>이름</label>
                <input type='text' name='name' id='' value={name} onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label htmlFor=''>나이</label>
                <input type='text' name='age' id='' value={age} onChange={changeInput} />
            </p>
            <p>
                <label htmlFor=''>사진</label>
                <input type='text' name='image' id='' value={image} onChange={changeInput} />
            </p>
            <p>
                <button type='submit'>등록</button>
            </p>
        </form>
    );
};

export default FriendInput;
