const CartItem = ({ item, onDel, onEdit }) => {
    const { amount, text, price, id } = item;
    return (
        <li>
            <p>
                <span>품목</span>:<strong>{text} </strong>
            </p>
            <p>
                <span>가격</span>:
                <strong>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong>
            </p>
            <p>
                <span>수량</span>:<strong> {amount}개 </strong>
            </p>
            <p>
                <button onClick={onEdit}>
                    <i className="xi-pen"></i>
                </button>
                <button onClick={() => onDel(id)}>
                    <i className="xi-trash"></i>
                </button>
            </p>
        </li>
    );
};

export default CartItem;
