import { useState } from 'react';

const Display = ({ name, ani, age, onAge }) => {
    return (
        <div>
            <h2>
                {name}가 좋아하는 동물은 {ani}, {age}살입니다.
            </h2>

            <p>
                <button
                    onClick={() => {
                        onAge(3);
                    }}
                >
                    3살
                </button>
                <button
                    onClick={() => {
                        onAge(5);
                    }}
                >
                    5살
                </button>
            </p>
        </div>
    );
};

const Animail = ({ ani, onAni }) => {
    return (
        <div>
            <h2>Animail 컴포넌트</h2>
            <label htmlFor=''>동물</label>
            <input type='text' value={ani} onChange={onAni} />
            <span style={{ fontSize: 20, marginLeft: 10 }}>{ani}</span>
        </div>
    );
};

const Name = ({ name, onName }) => {
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label htmlFor=''>이름</label>
            <input type='text' onChange={onName} />
            <span style={{ fontSize: 20, marginLeft: 10 }}>{name}</span>
        </div>
    );
};

const Test2 = () => {
    //const [상태변수, 상태변수값을 변경하는 함수] = useState(초기값)
    const [ani, setAni] = useState('강아지');
    const [name, setName] = useState('홍길동');
    const [age, setAge] = useState(10);

    // 값이 있는 곳에서 함수를 작성한다. 80%, 반드시는 아니다.
    //event, evt, e
    const onAni = (e) => {
        const { value } = e.target;
        setAni(value);
    };

    const onName = (e) => {
        const { value } = e.target;
        setName(value);
    };

    const onAge = (x) => {
        setAge(x);
    };
    return (
        <div>
            <Name name={name} onName={onName} />
            <hr />
            <Animail ani={ani} onAni={onAni} />
            <hr />
            <Display ani={ani} name={name} age={age} onAge={onAge} />
        </div>
    );
};

export default Test2;
