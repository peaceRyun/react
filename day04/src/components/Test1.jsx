import { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
    const [data, setData] = useState([]);

    //비동처리, 시간, props, state에 의해 업데이트
    /* 방법 1 - fetch는 json 형태로 우선 받게 된다.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((json) => setData(json));
    },[]);
    */

    // 방법 2 - axios
    /*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => setData(res.data));
    }, []);
    */

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //         const json = await res.json();
    //         setData(json);
    //     };
    //     getData();
    // }, []);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setData(res.data);
        };
        getData();
    }, []);

    // + 예외처리 필수

    return (
        <div>
            <ul>
                {data &&
                    data.length !== 0 &&
                    data.map((item) => (
                        <li key={item.id}>
                            {item.id}/{item.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Test1;
