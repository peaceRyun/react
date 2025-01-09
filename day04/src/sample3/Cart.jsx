import './style.scss';
import CartForm from './CartForm';
import CartList from './CartList';
import { useEffect, useRef, useState } from 'react';

const dataList = [
    { id: 1, text: '인형', price: 10000, amount: 3 },
    { id: 2, text: '오리', price: 20000, amount: 4 },
    { id: 3, text: '자전거', price: 40000, amount: 6 },
    { id: 4, text: '운동화', price: 30000, amount: 2 },
];

const Cart = () => {
    //{id:1, text:xxxx , price:10000 , amount:3}
    const [data, setData] = useState([]);
    const [sum, setSum] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [cart, setCart] = useState({
        text: '',
        price: 0,
        amount: 0,
    });
    const { text, price, amount } = cart;

    const no = useRef(data.length + 1);
    const textRef = useRef();

    const onDel = (id) => {
        const newItem = data.filter((item) => item.id !== id);
        setData(newItem);
    };

    const onEdit = (id) => {
        //find
        setCart(data.find((item) => item.id === id));
        // setCart({ text: '아무개', price: 34440, amount: 2 });
        setIsEdit(true);
        // setCart({ text: '', price: 0, amount: 0 });
    };
    //추가,수정 - 폼부분
    const onSubmit = (e) => {
        e.preventDefault();
        // if (!text.trim() || !price.trim() || !amount.trim()) return;
        if (isEdit) {
            //수정
            setData(data.map((item) => (item.id === cart.id ? cart : item)));
            setCart({ text: '', price: 0, amount: 0 });
            setIsEdit(true);
        } else {
            //등록
            cart.id = no.current++;
            setData([...data, { ...cart }]);
            //초기화
            setCart({ text: '', price: 0, amount: 0 });
            //포커스
            textRef.current.focus();
        }
        //객체 총가격
        cart.total = Number(price * amount);
    };
    //글자쓰기
    const changeInput = (e) => {
        const { name, value } = e.target;
        setCart({
            ...cart,
            [name]: value,
        });
    };

    //가격 변경이 되면 총금액 변경 -> 체크 useEffect
    useEffect(() => {
        // arr.reduce(callback[, initialValue])
        /*
        누산기 (acc)
        현재 값 (cur)
            arr.reduce((acc,cur)=> {
                return acc + cur
                }, 초기값)
        */

        setSum(
            data.reduce((acc, cur) => {
                return acc + cur.total;
            })
        );
    }, [data]);
    return (
        <>
            <div className='con-box'>
                <CartForm
                    isEdit={isEdit}
                    changeInput={changeInput}
                    onSubmit={onSubmit}
                    text={text}
                    price={price}
                    amount={amount}
                    textRef={textRef}
                />
                <CartList data={data} onDel={onDel} onEdit={onEdit} sum={sum} />
            </div>
        </>
    );
};

export default Cart;

// [
//     { id: 4, text: '운동화', price: 30000, amount: 2 , total:0},
//     ]
//     추가
//     [
//     { id: 4, text: '운동화', price: 30000, amount: 2 },
//     ]
//     해당객체.total  = 가격 * 수량  =>  숫자
//     외부값 입력 될때는 숫자 => 문자
