import { useNavigate, useParams } from 'react-router-dom';
import { CustomerDetailWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

const CustomerDetail = () => {
    const { customerData } = useSelector((state) => state.customerR);
    const navigate = useNavigate();
    const { customerID } = useParams();
    const newItem = customerData.find((item) => item.id === Number(customerID));
    const { id, title, name, content, date } = newItem;
    const onGo = () => {
        navigate('/customer');
    };
    return (
        <CustomerDetailWrap>
            <div className='inner'>
                <h2> 문의 글 </h2>
                <div className='con'>
                    <h3>
                        {id}번 {title}
                    </h3>

                    <p className='name'>{name} </p>
                    <p className='txt'> {content} </p>
                    <p className='date'> {date} </p>
                </div>

                <p>
                    <button onClick={onGo}>목록으로</button>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                </p>
            </div>
        </CustomerDetailWrap>
    );
};

export default CustomerDetail;
