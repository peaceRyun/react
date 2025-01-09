const CartForm = ({ isEdit, changeInput, onSubmit, text, price, amount }) => {
    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">품목</label>
                    <input type="text" name="text" value={text} onChange={changeInput} />
                </p>
                <p>
                    ㅇ<label htmlFor="">가격</label>
                    <input type="text" name="price" value={price} onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="">수량</label>
                    <input type="number" name="amount" value={amount} onChange={changeInput} />
                </p>
                <p>
                    <button>{isEdit ? '수정' : '등록'}</button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;
