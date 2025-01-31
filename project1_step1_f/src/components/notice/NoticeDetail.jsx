import { useNavigate, useParams } from 'react-router-dom';
import { NoticeDetailWrap } from './style';
import { useSelector } from 'react-redux';

const NoticeDetail = () => {
    const navigate = useNavigate();
    const { noticeData } = useSelector((state) => state.noticeR);
    const { noticeID } = useParams();
    const newItem = noticeData.find((item) => item.id === Number(noticeID));
    const { id, content, date, title } = newItem;

    const onGo = () => {
        navigate('/notice');
        // navigate(-1)
    };

    return (
        <NoticeDetailWrap>
            <div className="inner">
                <h2> 공지사항 </h2>
                <div className="con">
                    <h3>
                        {id} /{title}
                    </h3>
                    <p className="txt">{content} </p>
                    <p className="date">{date} </p>
                </div>
                <button onClick={onGo}>목록으로</button>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
