import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../store/modules/commonSlice';

const NavBar = () => {
    const { authed } = useSelector((state) => state.authR);
    return (
        <>
            <NavWrap className='nav'>
                <ul>
                    <li>
                        <Link to='/music' onClick={() => dispatchEvent(commonActions.onVisual('music'))}>
                            Music
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={() => dispatchEvent(commonActions.onVisual('about'))}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/artist' onClick={() => dispatchEvent(commonActions.onVisual('artist'))}>
                            Artist
                        </Link>
                    </li>
                    <li>
                        <Link to='/gallery' onClick={() => dispatchEvent(commonActions.onVisual('gallery'))}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to='/notice' onClick={() => dispatchEvent(commonActions.onVisual('notice'))}>
                            Notice
                        </Link>
                    </li>
                    <li>
                        <Link to='/Customer' onClick={() => dispatchEvent(commonActions.onVisual('Customer'))}>
                            customer
                        </Link>
                    </li>
                </ul>
            </NavWrap>

            <TopMenu className='top-menu'>
                <li>
                    <Link to='/join'>회원가입</Link>
                </li>
                {authed ? (
                    <li>
                        <Link to='/logout'>로그아웃</Link>
                    </li>
                ) : (
                    <li>
                        <Link to='/login'>로그인</Link>
                    </li>
                )}
            </TopMenu>
        </>
    );
};

export default NavBar;
