import { CustomerLIstWrap } from './style';
import CustomerItem from './CustomerItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { pagenationActions } from '../../store/modules/pagenationSlice';

const CustomerLIst = () => {
    const { authed } = useSelector((state) => state.authR);
    const { customerData } = useSelector((state) => state.customerR);
    const { postsPerPage, currPage } = useSelector((state) => state.pagenationR);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pagenationActions.addData(customerData));
    }, [customerData]);

    const onAdd = () => {
        if (authed) {
            navigate('/customer/customerAdd');
        } else {
            navigate('/login');
        }
    };

    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPost = customerData.slice(firstPost, lastPost);
    return (
        <CustomerLIstWrap>
            <table className='customerTable'>
                <caption>게시판</caption>
                <colgroup>
                    <col className='num' />
                    <col className='title' />
                    <col className='name' />
                    <col className='date' />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((item) => (
                        <CustomerItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
            <p>
                <button onClick={onAdd}>글 작성 </button>
            </p>
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
