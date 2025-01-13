import axios from 'axios';
import { useEffect, useState } from 'react';

//  https://jsonplaceholder.typicode.com/todos
const Test1 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //useEffect 반드시 쓰는 곳=> props, state 변경, 시간, 초기 비어있는 값 체크
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos`;
        const getData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
                setLoading(true);
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                //마지막에 무조건 실행하는 구문
                //없어도 됨
                setLoading(false);
            }
            // setLoading(false);
        };

        getData();
    }, []);
    //함수
    if (loading)
        return (
            <div>
                <h2>로딩중...</h2>
            </div>
        );

    if (error)
        return (
            <div>
                <h2>주소를 찾을 수 없음</h2>
            </div>
        );
    //return 안에는 jsx영역
    if (data.length > 0)
        return (
            <div>
                <h2>비동기</h2>
                {data.map((item) => (
                    <p key={item.id}>
                        {item.id}/{item.title}
                    </p>
                ))}
            </div>
        );
};

export default Test1;
