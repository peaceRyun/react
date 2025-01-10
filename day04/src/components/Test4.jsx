import { useState } from 'react';
const dataList = [
    { id: 1, name: 'chk1', text: '(필수) 종합계좌약관', isChk: false },
    { id: 2, name: 'chk2', text: '(필수) 미니 금고 서비스 이용약관', isChk: false },
    { id: 3, name: 'chk3', text: '(필수) 금융거래 필수 확인서', isChk: false },
    { id: 4, name: 'chk4', text: '이벤트 뉴스 알림 받기', isChk: false },
];
const Test4 = () => {
    const [data, setData] = useState(dataList);
    const changeInput = (e) => {
        const { checked, name } = e.target;
        if (name === 'all') {
            setData(data.map((item) => ({ ...item, isChk: checked })));
        } else {
            //
            setData(data.map((item) => (item.name === name ? { ...item, isChk: checked } : item)));
        }
    };
    const isAllChk = data.every((item) => item.isChk);
    return (
        <div>
            <p>
                <input type='checkbox' name='all' id='' onChange={changeInput} checked={isAllChk} />
                <label htmlFor=''>약관 전체 동의</label>
            </p>
            <hr />
            {data.map((item) => (
                <p key={item.id}>
                    <input type='checkbox' name={item.name} id='' checked={item.isChk} onChange={changeInput} />
                    <label htmlFor=''>{item.text}</label>
                </p>
            ))}
        </div>
    );
};
export default Test4;
