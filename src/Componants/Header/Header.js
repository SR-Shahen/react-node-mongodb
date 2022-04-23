import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>HOME</Link>
            <Link to='/add'>ADD</Link>
            <Link to='/update'>Update</Link>

        </div>
    );
};

export default Header;