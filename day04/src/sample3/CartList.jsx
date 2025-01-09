import CartItem from './CartItem';

const CartList = ({ data, onDel, onEdit, sum }) => {
    return (
        <div className='con2'>
            <p>
                <button className='btn'>전체삭제</button>
                <span className='total'>총금액 : 0 원</span>
            </p>
            <ul className='list'>
                {data.map((item) => (
                    <CartItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} sum={sum} />
                ))}
            </ul>
        </div>
    );
};

export default CartList;
