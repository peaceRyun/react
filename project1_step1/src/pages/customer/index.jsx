import CustomerLIst from '../../components/customer/CustomerList';
import { CustomerWrap } from './style';

const Customer = () => {
    return (
        <CustomerWrap>
            <div className='inner'>
                <h2> 고객문의 </h2>
                <CustomerLIst />
                {/* <Pagination /> */}
            </div>
        </CustomerWrap>
    );
};

export default Customer;
