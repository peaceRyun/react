const CartForm = () => {
    return (
        <div className="box con1">
            <form>
                <p>
                    <label htmlFor="">품목</label>
                    <input type="text" />
                </p>
                <p>
                    ㅇ<label htmlFor="">가격</label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">수량</label>
                    <input type="number" />
                </p>
                <p>
                    <button>등록</button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;
