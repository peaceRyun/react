import { useEffect, useState } from 'react';

const dataList = [
    { id: 1, text: 'dog', addr: '서울' },
    { id: 2, text: 'cat', addr: '울산' },
    { id: 3, text: 'fish', addr: '제주' },
    { id: 4, text: '강호동', addr: '서울' },
    { id: 5, text: 'fIsh', addr: '강원도' },
    { id: 6, text: 'caT', addr: '부산' },
    { id: 7, text: 'Dog', addr: '전주' },
    { id: 8, text: 'dOG', addr: '제주' },
    { id: 9, text: 'extra', addr: '경키도' },
    { id: 10, text: 'ExTrA', addr: '서해안' },
];

const Test3 = () => {
    const [data, setData] = useState(dataList);
    const [text, setText] = useState('');

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const onSearch = () => {
        // setData(data.filter((item) => item.addr.indexOf(text) !== -1));
        // setData(data.filter((item) => item.text.indexOf(text) !== -1));
        // setData(data.filter((item) => item.text.toLowerCase().indexOf(text.toLowerCase()) !== -1));

        setData(data.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())));

        //실시간 검색
        // 한글 초성 문제 -> sql 해결가능
    };

    useEffect(() => {
        setData(dataList.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())));
    }, [text]);

    return (
        <div>
            <p>
                <input type='text' value={text} onChange={changeInput} /> <button onClick={onSearch}>검색</button>
            </p>
            <hr />
            <ul>
                {data.map(({ id, text, addr }) => (
                    <li key={id}>
                        {id}/{text}/{addr}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test3;
