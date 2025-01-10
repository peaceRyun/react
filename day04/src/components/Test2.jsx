import { useState } from 'react';

const dataList = [
    { id: 1, text: '홍길동', addr: '서울' },
    { id: 2, text: '김철수', addr: '울산' },
    { id: 3, text: '김영희', addr: '제주' },
    { id: 4, text: '강호동', addr: '경남' },
    { id: 5, text: '유재석', addr: '강원도' },
    { id: 6, text: '이정재', addr: '부산' },
];

const Test2 = () => {
    const [data, setData] = useState(dataList);
    const changeInput1 = (e) => {
        const { value } = e.target;
        if (value === 'id') {
            setData(
                [...data].sort((a, b) => {
                    if (a.id > b.id) {
                        return 1;
                    } else if (a.id < b.id) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            );
        } //end if

        if (value === 'text') {
            setData([...data].sort((a, b) => (a.text > b.text ? 1 : -1)));
        } //end if

        if (value === 'addr') {
            setData([...data].sort((a, b) => (a.addr > b.addr ? 1 : -1)));
        }
    };

    //객체.키, 객체['키']

    const changeInput = (e) => {
        const { value } = e.target;
        if (value != '') {
            setData([...data].sort((a, b) => (a[value] > b[value] ? 1 : -1)));
        }
    };

    return (
        <div>
            <div>
                <select onChange={changeInput}>
                    <option value=''>==== 정렬 ====</option>
                    <option value='id'>번호</option>
                    <option value='text'>이름</option>
                    <option value='addr'>주소</option>
                </select>
            </div>
            <hr />
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.id}/{item.text}/{item.addr}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test2;
