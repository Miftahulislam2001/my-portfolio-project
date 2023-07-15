import React from 'react'
import cv from '../../assets/Resume .pdf'
import {FiDownload} from 'react-icons/fi'

const Cta = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='Cta'>
            <a href={cv} download className='btn'> Resume <FiDownload className='d-btn'/></a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default Cta;