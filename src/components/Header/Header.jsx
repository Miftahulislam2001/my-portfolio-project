import React from 'react';
import './Header.css'
import Cta from './Cta'
import Me from '../../assets/sohan.png'
import HeaderSocials from './HeaderSocials';





const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm </h5>
                <h1>Mifthul islam Sohan</h1>
                <h5 className="text-light">
                   Front - End Developer 
                </h5>
                <Cta></Cta>
                <HeaderSocials></HeaderSocials>

                <div data-aos="zoom-in" data-aos-duration="1000" className='me'>
                    <img src={Me} alt="" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll_Down</a>
            </div>
        </header>
    );
};

export default Header;