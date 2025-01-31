import { useNavigate } from 'react-router-dom';
import { CustomerAddWrap } from './style';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { customerActions } from '../../store/modules/customerSlice';

const CustomerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        title: '',
        content: '',
        name: '',
        date: '',
    });
    const { title, content, name, date } = user;
    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const now = new Date();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !name || !content) return;
        user.date = `${now.getFullYear()} - ${now.getMonth() + 1} -${now.getDate()} `;
        dispatch(customerActions.add(user));
        navigate('/customer');
    };

    const onExit = (e) => {
        e.preventDefault();
        navigate('/customer');
    };
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의 </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input
                            type="text"
                            placeholder="제목"
                            name="title"
                            value={title}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="작성자"
                            name="name"
                            value={name}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <textarea
                            cols="100"
                            rows="10"
                            placeholder="문의하기"
                            name="content"
                            value={content}
                            onChange={changeInput}
                        ></textarea>
                    </p>
                    <p>
                        <button onClick={onExit}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={onExit}>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerAdd;
