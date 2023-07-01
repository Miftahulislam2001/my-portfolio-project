import React from 'react'
import cv from '../../assets/Resume .pdf'
import {FiDownload} from 'react-icons/fi'

const Cta = () => {
    return (
        <div className='Cta'>
            <a href={cv} download className='btn'> Resume <FiDownload className='d-btn'/></a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default Cta;