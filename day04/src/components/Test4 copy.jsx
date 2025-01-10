import { useState } from 'react';

const dataList = [
    { id: 1, name: 'chk1', isChk: false },
    { id: 2, name: 'chk2', isChk: false },
    { id: 3, name: 'chk3', isChk: false },
    { id: 4, name: 'chk4', isChk: false },
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

    return (
        <div>
            <p>
                <input
                    type='checkbox'
                    name='all'
                    id=''
                    onChange={changeInput}
                    checked={data.filter((item) => item.isChk !== true).length < 1}
                />
                <label htmlFor=''>약관 전체 동의</label>
            </p>
            <hr />
            <p>
                <input type='checkbox' name={data[0].name} id='' checked={data[0].isChk} onChange={changeInput} />
                <label htmlFor=''>(필수) 종합계좌약관</label>
            </p>
            <p>
                <input type='checkbox' name={data[1].name} id='' checked={data[1].isChk} onChange={changeInput} />
                <label htmlFor=''>(필수) 미니 금고 서비스 이용약관</label>
            </p>
            <p>
                <input type='checkbox' name={data[2].name} id='' checked={data[2].isChk} onChange={changeInput} />
                <label htmlFor=''>(필수) 금융거래 필수 확인서</label>
            </p>
            <p>
                <input type='checkbox' name={data[3].name} id='' checked={data[3].isChk} onChange={changeInput} />
                <label htmlFor=''> 이벤트 뉴스 알림 받기 </label>
            </p>
        </div>
    );
};
export default Test4;
