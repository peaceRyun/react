import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const ProductDetail = () => {
    const { productID } = useParams();
    // 1. data.js , 2.productID와 data의 id 비교해서 같은 객체 {} find

    const thisProduct = data.find((item) => item.id == Number(productID));
    const { price, photo, description, name } = thisProduct;
    const navigate = useNavigate();

    const onGo = () => {
        navigate('/products');
    };
    return (
        <div className='view'>
            <div className='inner'>
                <div className='item'>
                    <h1> 상세페이지</h1>
                    <h2>가격: {price} 원</h2>
                    <p>사진주소 : {photo} </p>
                    <p>
                        <img src={photo} alt={name} width='450' />
                    </p>
                    <p>상품 설명: {description}</p>
                    <button onClick={onGo}>제품목록</button>
                </div>
                <div className='box'>상세 설명구조</div>
            </div>
            0
        </div>
    );
};

export default ProductDetail;
