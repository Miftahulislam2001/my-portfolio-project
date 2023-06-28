import React from 'react';
import './Header.css'
import Cta from './Cta'
import Me from '../../assets/sohan.png'
import HeaderSocials from './HeaderSocials';





const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello Im </h5>
                <h1>Mifthul islam</h1>
                <h5 className="text-light">
                   Front - end Developer 
                </h5>
                <Cta></Cta>
                <HeaderSocials></HeaderSocials>

                <div className='me'>
                    <img src={Me} alt="" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll_Sown</a>
            </div>
        </header>
    );
};

export default Header;