import React from 'react';
import { CustomLink } from './customLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='link-container'>
            <CustomLink to={'/home'}>Home</CustomLink>
            <CustomLink to={'/review'}>Reviews</CustomLink>
            <CustomLink to={'/chart'}>Dashboards</CustomLink>
        </div>
    );
};

export default Header;