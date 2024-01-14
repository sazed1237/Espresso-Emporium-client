import React from 'react';
import logo from '../assets/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className='flex headerBG md:h-[100px]  md:justify-center items-center'>
            <img className='md:h-[75px] h-[50px] px-3' src={logo} alt="" />
            <h2 className='text-white font-semibold md:text-4xl text-xl' >Espresso Emporium</h2>
        </div>
    );
};

export default Header;