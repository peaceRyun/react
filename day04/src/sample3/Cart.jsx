import './style.scss';
import CartForm from './CartForm';
import CartList from './CartList';
import { useRef, useState } from 'react';

const dataList = [
    { id: 1, text: '인형', price: 10000, amount: 3 },
    { id: 2, text: '오리', price: 20000, amount: 4 },
    { id: 3, text: '자전거', price: 40000, amount: 6 },
    { id: 4, text: '운동화', price: 30000, amount: 2 },
];

const Cart = () => {
    //{id:1, text:xxxx , price:10000 , amount:3}
    const [data, setData] = useState(dataList);
    const [sum, setSum] = useState(10000);
    const [isEdit, setIsEdit] = useState(false);
    const [cart, setCart] = useState({
        text: '자전거',
        price: 0,
        amount: 0,
    });
    const { text, price, amount } = cart;

    const no = useRef(data.length + 1);

    const onDel = (id) => {
        const newItem = data.filter((item) => item.id !== id);
        setData(newItem);
    };

    const onEdit = () => {
        setIsEdit(!isEdit);
    };
    //추가,수정 - 폼부분
    const onSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            //수정
        } else {
            //등록
        }
    };
    //글자쓰기
    const changeInput = (e) => {
        const { name, value } = e.target;
        setCart({
            ...cart,
            [name]: value,
        });
    };
    return (
        <>
            <div className="con-box">
                <CartForm
                    isEdit={isEdit}
                    changeInput={changeInput}
                    onSubmit={onSubmit}
                    text={text}
                    price={price}
                    amount={amount}
                />
                <CartList data={data} onDel={onDel} onEdit={onEdit} />
            </div>
        </>
    );
};

export default Cart;
