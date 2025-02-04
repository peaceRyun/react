import { Link } from 'react-router-dom';
import { NavWrap, TopMenu } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../store/modules/commonSlice';

const NavBar = () => {
    const { authed } = useSelector((state) => state.authR);
    const dispatch = useDispatch();
    return (
        <>
            <NavWrap className="nav">
                <ul>
                    <li>
                        <Link to="/music" onClick={() => dispatch(commonActions.onVisual('music'))}>
                            Music
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => dispatch(commonActions.onVisual('about'))}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/artist"
                            onClick={() => dispatch(commonActions.onVisual('artist'))}
                        >
                            Artist
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            onClick={() => dispatch(commonActions.onVisual('gallery'))}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/notice"
                            onClick={() => dispatch(commonActions.onVisual('notice'))}
                        >
                            Notice
                        </Link>
                    </li>
                    <li>
                        <Link to="/Customer">customer</Link>
                    </li>
                </ul>
            </NavWrap>

            <TopMenu className="top-menu">
                <li>
                    <Link to="/join">회원가입</Link>
                </li>
                {authed ? (
                    <li>
                        <Link to="/logout">로그아웃</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                )}
            </TopMenu>
        </>
    );
};

export default NavBar;
