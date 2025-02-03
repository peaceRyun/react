import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './style';
import { useEffect } from 'react';
import { pagenationActions } from '../../store/modules/pagenationSlice';

const Pagination = () => {
    const { noticeData } = useSelector((state) => state.noticeR);
    const { customerData } = useSelector((state) => state.customerR);
    const { currPage, totalPage } = useSelector((state) => state.pagenationR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pagenationActions.totalData());
    }, [noticeData, customerData]);

    //배열, 공간을 개수만큼
    const arr = [...Array(totalPage)];
    const selectPage = (x) => {
        dispatch(pagenationActions.currentPage(x));
    };
    return (
        <PaginationWrap>
            <div>
                <button>{`<<`}</button>
                <button>{`<`}</button>

                {arr.map((_, idx) => (
                    <button key={idx} className={currPage === idx + 1 ? 'on' : ''} onClick={() => selectPage(idx + 1)}>
                        {idx + 1}
                    </button>
                ))}

                <button>{`>`}</button>
                <button>{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
