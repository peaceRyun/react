import { Link } from 'react-router-dom';

const UserItem = ({ item }) => {
    const { name, id } = item;
    return (
        <li>
            <Link to={`${id}`}> {name} </Link>
        </li>
    );
};

export default UserItem;
