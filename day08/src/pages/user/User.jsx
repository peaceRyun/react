import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import UserItem from '../../components/users/UserItem';
import { useEffect } from 'react';
import { getUser } from '../../store/modules/userSlice';

const UserCon = styled.div`
    ul {
        border: 1px solid pink;
        padding: 10px;
        li {
            border-bottom: 1px solid #999;
            line-height: 50px;
            &:last-child {
                border-bottom: none;
            }
        }
    }
`;

const User = () => {
    const { user } = useSelector((state) => state.userR);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <UserCon>
            <div className='inner'>
                <h2> User List </h2>
                <ul>{user && user.length > 0 && user.map((item) => <UserItem key={item.id} item={item} />)}</ul>
            </div>
        </UserCon>
    );
};

export default User;
