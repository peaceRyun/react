import { useState } from 'react';
import { useRef } from 'react';

const Test3 = () => {
    const [userid, setUserid] = useState();
    const [pw, setPw] = useState();
    const [email, setEmail] = useState();
    const idRef = useRef();

    const changeInput1 = (e) => {
        setUserid(e.target.value);
    };

    const changeInput2 = (e) => {
        setPw(e.target.value);
    };

    const changeInput3 = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div>
            <h2>input 여러개일때</h2>
            <input type='text' onChange={changeInput1} name='' id='' ref={idRef} />
            <input type='text' onChange={changeInput2} name='' id='' />
            <input type='text' onChange={changeInput3} name='' id='' />
            <button>초기화</button>
            <hr />
            <h3>userid : {userid}</h3>
            <h3>pw : {pw}</h3>
            <h3>email : {email}</h3>
        </div>
    );
};

export default Test3;
