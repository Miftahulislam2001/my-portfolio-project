import React from 'react';
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookReader} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'

const Nav = () => {
    return (
        <nav>
            <a href=""><AiOutlineHome /></a>
            <a href="#about"><AiOutlineUser /></a>
            <a href="#experience"><BiBookReader /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#contact"><RiContactsLine /></a>
        </nav>
    );
};

export default Nav;