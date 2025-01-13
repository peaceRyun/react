import { Link } from 'react-router-dom';

import navList from './data';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
    const [isShow, setIsShow] = useState(false);
    const onToggle = () => {};

    return (
        <div className="navbar">
            <p className="all-menu">
                <FiMenu></FiMenu>
            </p>
            <nav>
                <ul>
                    <li>menu</li>
                </ul>
                <p className="close">X</p>
            </nav>
        </div>
    );
};

export default NavBar;
