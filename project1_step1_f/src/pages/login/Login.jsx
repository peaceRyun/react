import { useNavigate } from 'react-router-dom';
import { LoginWrap } from './style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActins } from '../../store/modules/authSlice';

const Login = () => {
    // email: 'abc@naver.com',
    // password: 'a1234',
    const { authed } = useSelector((state) => state.authR);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;
    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(authActins.login(user));
        setUser({ email: '', password: '' });
    };

    useEffect(() => {
        if (authed) {
            navigate('/');
        } else {
            // if(!)
            // alert('이메일 또는 비밀번호 오류');
            // setUser({ email: '', password: '' });
            //포커스
        }
    }, [authed]);
    return (
        <LoginWrap onSubmit={onSubmit}>
            <div className='inner'>
                <h2>로그인 페이지 입니다. </h2>
                <form>
                    <p>
                        <label>이메일 </label>
                        <input
                            type='email'
                            name='email'
                            placeholder='로그인정보:abc@naver.com'
                            value={email}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label>비밀번호 </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='로그인정보:a1234'
                            value={password}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <span>테스트 이메일: abc@naver.com </span>
                        <span>테스트 비밀번호 : a1234</span>
                    </p>
                    <p className='btn'>
                        <button type='submit'>로그인</button>
                    </p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;
