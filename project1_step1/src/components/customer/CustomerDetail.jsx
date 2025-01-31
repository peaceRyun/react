import { useNavigate, useParams } from 'react-router-dom';
import { CustomerDetailWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { customerActions } from '../../store/modules/customerSlice';

const CustomerDetail = () => {
    const { customerData } = useSelector((state) => state.customerR);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customerID } = useParams();
    const thisCustomer = customerData.find((item) => item.id === Number(customerID));
    const { id, title, name, content, date } = thisCustomer;
    const onList = () => {
        navigate('/customer');
    };
    const onEdit = () => {
        dispatch(customerActions.edit(thisCustomer));
        navigate('/customer/customerEdit');
    };
    const onDel = () => {
        dispatch(customerActions.del(id));
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
                    <button onClick={onList}>목록으로</button>
                    <button onClick={onEdit}>수정하기</button>
                    <button onClick={onDel}>삭제하기</button>
                </p>
            </div>
        </CustomerDetailWrap>
    );
};

export default CustomerDetail;
