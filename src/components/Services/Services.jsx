import React from 'react';
import './Services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className=" container services_container">
                <article className='service'>
                   <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div> 
                    <ul className='service_list'>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* Web development  */}
                <article className='service'>
                   <div className="service_head">
                        <h3>Web Development</h3>
                    </div> 
                    <ul className='service_list'>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                   <div className="service_head">
                        <h3>Content Creator</h3>
                    </div> 
                    <ul className='service_list'>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    
                        <li>
                            <BsCheckLg />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;