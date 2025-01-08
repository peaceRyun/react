import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.scss';

const Main = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        addr: '',
        tel: '',
        job: '',
        email: '',
        gender: '',
        inter: '',
    });

    const [cnt, setCnt] = useState(1);

    //user.name, user['키'], user['name명'], user[name]
    const { name, age, addr, tel, job, email, gender, inter } = user;

    // 상태값이 있는 곳에서 바뀐 함수 구현 80%
    //다음
    const onNext = () => {
        setCnt(cnt + 1);
    };
    //이전
    const onPrev = () => {
        setCnt(cnt - 1);
    };

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    // 함수영역
    // if (cnt === 1) {
    //     return <Step1 />;
    // }
    return (
        <div className='wrap'>
            {cnt === 1 && (
                <Step1 name={name} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext} />
            )}
            {cnt === 2 && <Step2 user={user} changeInput={changeInput} onNext={onNext} onPrev={onPrev} />}
            {cnt === 3 && <Step3 {...user} onNext={onNext} onPrev={onPrev} />}
            {cnt === 4 && <Step4 name={name} />}
        </div>
    );
};

export default Main;
