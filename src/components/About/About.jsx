import React from 'react';
import './About.css'
 import me from '../../assets/sohan.png'
// import ME from '../../assets/about_img.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFilePpt} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <img src={me} alt="" />
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon' />
                           <h5>Experience</h5> 
                           <small>6-7 month Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className='about_icon' />
                           <h5>Client</h5> 
                           <small>Clients Worldwide</small>
                        </article>
                        <article className="about_card">
                            <AiFillFilePpt className='about_icon' />
                           <h5>Projects</h5> 
                           <small>25+ Completed</small>
                        </article>
                    </div>
                    <div className='about-btn'>
                    <p>
                    Welcome to my Portfolio. I'm a front-end web developer with a passion for creating beautiful and intuitive user experiences. I have experience working with HTML, CSS, JavaScript, and front-end frameworks React . I'm also proficient in responsive design and optimizing websites for performance .
                    
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;