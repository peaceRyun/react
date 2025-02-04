import { useState } from 'react';
import { JoinWrap } from './style';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActins } from '../../store/modules/authSlice';

const Join = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        tel: '',
        email: '',
        password: '',
    });
    const { username, tel, email, password } = user;
    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        dispatch(authActins.signup(user));
        navigate('/login');
    };
    return (
        <>
            <JoinWrap onSubmit={onSubmit}>
                <div className="inner">
                    <h2> 회원가입 </h2>
                    <form>
                        <p>
                            <label> 이름 </label>
                            <input
                                type="text"
                                placeholder="홍길동"
                                name="username"
                                value={username}
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label> 전화번호 </label>
                            <input type="tel" name="tel" value={tel} onChange={changeInput} />
                        </p>
                        <p>
                            <label>이메일 </label>
                            <input type="email" name="email" value={email} onChange={changeInput} />
                        </p>
                        <p>
                            <label>비밀번호 </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <button type="submit">회원가입</button>
                            <button>취소</button>
                        </p>
                    </form>
                </div>
            </JoinWrap>
        </>
    );
};

export default Join;
