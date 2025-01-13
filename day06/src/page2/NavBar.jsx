import { Link } from 'react-router-dom';

import navList from './data';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
    const [isShow, setIsShow] = useState(false);
    const onToggle = () => {
        setIsShow(!isShow);
    };
    //x는 setIsShow 이용 해결

    return (
        <div className='navbar'>
            <p className='all-menu' onClick={onToggle}>
                <FiMenu></FiMenu>
            </p>
            <nav className={isShow ? 'on' : ''}>
                <ul>
                    {navList.map((item) => (
                        <li key={item.id}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <p className='close' onClick={() => setIsShow(false)}>
                    X
                </p>
            </nav>
        </div>
    );
};

export default NavBar;
