import './style.scss';
import CartForm from './CartForm';
import CartList from './CartList';

const Cart = () => {
    //{id:1, text:xxxx , price:10000 , amount:3}

    return (
        <>
            <div className="con-box">
                <CartForm />
                <CartList />
            </div>
        </>
    );
};

export default Cart;
