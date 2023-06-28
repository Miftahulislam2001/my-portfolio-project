import React from 'react'
import cv from '../../assets/Resume .pdf'


const Cta = () => {
    return (
        <div className='Cta'>
            <a href={cv} download className='btn'>Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default Cta;