import { NoticeListWrap } from './style';
import NoticeItem from './NoticeItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { noticeActions } from '../../store/modules/noticeSlice';
import { pagenationActions } from '../../store/modules/pagenationSlice';

const NoticeList = () => {
    const { noticeData } = useSelector((state) => state.noticeR);
    const { postsPerPage, currPage } = useSelector((state) => state.pagenationR);
    const dispatch = useDispatch();

    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPost = noticeData.slice(firstPost, lastPost);

    useEffect(() => {
        dispatch(noticeActions.onLoad());
    }, []);

    useEffect(() => {
        dispatch(pagenationActions.addData(noticeData));
    }, [noticeData]);

    return (
        <NoticeListWrap>
            <table className="noticeTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((item) => (
                        <NoticeItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
