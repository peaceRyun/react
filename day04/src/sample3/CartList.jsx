import CartItem from './CartItem';

const CartList = () => {
    return (
        <div className="con2">
            <p>
                <button className="btn">전체삭제</button>
                <span className="total">총금액 : 0 원</span>
            </p>
            <ul className="list">
                <CartItem />
            </ul>
        </div>
    );
};

export default CartList;
