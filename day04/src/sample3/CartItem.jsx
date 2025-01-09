const CartItem = () => {
    return (
        <li>
            <p>
                <span>품목</span>:<strong>ㅌㅌㅌ </strong>
            </p>
            <p>
                <span>가격</span>:<strong>00</strong>
            </p>
            <p>
                <span>수량</span>:<strong>00 </strong>
            </p>
            <p>
                <button>
                    <i className="xi-pen"></i>
                </button>
                <button>
                    <i className="xi-trash"></i>
                </button>
            </p>
        </li>
    );
};

export default CartItem;
