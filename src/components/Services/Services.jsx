import React from 'react';
import './Services.css'
import {FaCheck} from 'react-icons/fa'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className=" container services_container">
                <article data-aos="fade-up-right" data-aos-duration="2000" className='service'>
                   <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div> 
                    <ul className='service_list'>
                        <li>
                            <FaCheck />
                            <p>User-centric, intuitive designs for enhanced experiences.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Visually appealing interfaces, focused on user experience.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Wireframing, prototyping, and validating design concepts.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>User research, usability testing, improving interface usability.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Responsive designs ensuring optimal performance across devices.</p>
                        </li>
                    
                        <li>
                            <FaCheck />
                            <p>Collaborating with development teams for seamless integration.</p>
                        </li>
                    </ul>
                </article>
                {/* Web development  */}
                <article data-aos="zoom-in" data-aos-duration="2000" className='service'>
                   <div className="service_head">
                        <h3>Web Development</h3>
                    </div> 
                    <ul className='service_list'>
                        <li>
                            <FaCheck />
                            <p>Customized websites tailored to your unique needs.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Responsive designs for seamless mobile and desktop experiences.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Front-end development modern frameworks and technologies.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Back-end development functionality and data management.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>UI/UX design expertise, enhancing digital experiences.</p>
                        </li>
                    
                        <li>
                            <FaCheck />
                            <p>Website maintenance and support for hassle-free operation.</p>
                        </li>
                    </ul>
                </article>
                <article data-aos="fade-up-left" data-aos-duration="2000" className='service'>
                   <div className="service_head">
                        <h3>Content Creator</h3>
                    </div> 
                    <ul className='service_list'>
                        <li>
                            <FaCheck />
                            <p>Engaging and persuasive content that captivates audiences.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Tailored content strategies for brand awareness and growth.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>SEO optimization for higher search engine rankings. Content Creation ranking </p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Social media content creation for effective online presence.</p>
                        </li>
                        <li>
                            <FaCheck />
                            <p>Blogging and article writing for informative and valuable content.</p>
                        </li>
                    
                        <li>
                            <FaCheck />
                            <p>Compelling storytelling to evoke emotions and connect with readers.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;