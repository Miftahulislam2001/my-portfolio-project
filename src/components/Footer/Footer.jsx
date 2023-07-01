import React from 'react';
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
       
        <footer>
            <a href="#" className='footer_logo'>Sohan</a>

            <ul className='permalink'>
             <li><a href="#">Home</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#experience">Experience</a></li>
             <li><a href="#services">Services</a></li>
             <li><a href="#portfolio">Portfolio</a></li>
             <li><a href="#testimonials">Testimonials</a></li>
             <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_social">
             <a href="https://web.facebook.com/miftahulislam2001"><FaFacebookF /></a>
             <a href="https://instagram.com"><FiInstagram /></a>
             <a href="https://twitter.com"><FiTwitter /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Miftahul Islam Sohan.All rights Reserved</small>
            </div>

        </footer>
    );
};

export default Footer;