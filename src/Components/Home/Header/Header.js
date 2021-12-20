import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import TopNavigation from './../TopNavigation/TopNavigation';

const Header = () => {
    return (
        <div className='container-fluid'>
            <TopNavigation/>
            <Banner/>
            <div className='navbar-align'>
            <NavBar/>
            </div>
        </div>
    );
};

export default Header;