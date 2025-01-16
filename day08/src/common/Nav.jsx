import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavCon = styled.nav`
    ul {
        display: flex;
        li {
            margin-left: 80px;
            a {
                font-size: 20px;
                font-weight: 700;
                color: #fff;
            }
        }
    }
`;
const Nav = () => {
    return (
        <NavCon>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
            </ul>
        </NavCon>
    );
};

export default Nav;
