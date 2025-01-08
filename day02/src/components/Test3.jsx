import { useState } from 'react';
import { useRef } from 'react';

const Test3 = () => {
    //객체
    const [user, setUser] = useState({
        userid: '',
        pw: '',
        email: '',
    });
    //구조분해
    const { userid, pw, email } = user;
    // 객체.키, 객체['키']

    const idRef = useRef();

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onReset = () => {
        // 모두 지우고
        // 첫번째 커서 이동
        setUser({
            userid: '',
            pw: '',
            email: '',
        });
        idRef.current.focus();
    };
    return (
        <div>
            <h2>input 여러개일때</h2>
            <input type='text' onChange={changeInput} value={userid} name='userid' id='' ref={idRef} />
            <input type='text' onChange={changeInput} value={pw} name='pw' id='' />
            <input type='text' onChange={changeInput} value={email} name='email' id='' />
            <button onClick={onReset}>초기화</button>
            <hr />
            <h3>userid : {userid}</h3>
            <h3>pw : {pw}</h3>
            <h3>email : {email}</h3>
        </div>
    );
};

export default Test3;
