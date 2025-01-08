import { useState } from 'react';
import './Test1.scss';

const Test1 = () => {
    const [isClass, setIsClass] = useState(false);
    const add = () => {
        setIsClass(true);
    };
    const remove = () => {
        setIsClass(false);
    };
    const toggle = () => {
        setIsClass(!isClass);
    };

    return (
        <>
            <div>기본형식</div>
            <div className='on'>클래스 on 붙이기</div>
            <div className='show on'>기본 클래스에 on 붙이기</div>
            <hr />
            <h2>위와 동일하게 나오기</h2>
            <div className={isClass ? 'on' : ''}>클래스 on 붙이기</div>
            <div className={`show ${isClass ? 'on' : ''}`}>show는 유지하고 , on 붙이기</div>
            <hr />
            <p>
                <button onClick={add}>add</button>
                <button onClick={remove}>remove</button>
                <button onClick={toggle}>toggle</button>
            </p>
        </>
    );
};

export default Test1;
