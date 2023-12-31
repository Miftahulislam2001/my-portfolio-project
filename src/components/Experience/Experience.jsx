import React from 'react';
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>my experience</h2>

            <div className="container experience_container">
                <div data-aos="fade-right" data-aos-duration="2000" className="experience_frontend">
                    <h3>Frontend Developer</h3>
                    <div className="experience_container">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="experience_backend">
                    <h3>Backend Developer</h3>
                    <div className="experience_container">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Express.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>JWT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>REST APIs </h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Next.js </h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;