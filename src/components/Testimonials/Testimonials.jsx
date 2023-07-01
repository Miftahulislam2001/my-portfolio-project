import React from 'react';
import './Testimonials.css'
import M from '../../assets/M.jpg'
import C from '../../assets/C.jpg'
import J from '../../assets/J.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation,  Pagination } from 'swiper';



const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                  // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                <SwiperSlide className='testimonial'>
                    <div className="client_avatar">
                        <img src={J} alt="avatar one" />
                    </div>
                    <h5 className='client_name'>jose phallee</h5>
                        <small className='client_review'>
                        Fantastic work. Miftahul is a good communicator and very professional. He took our Figma, made a few quick suggestions, and quickly delivered the code. I'd highly recommend him.
                        </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client_avatar">
                        <img src={C} alt="avatar one" />
                    </div>
                    <h5 className='client_name'>charlenacharday</h5>
                        <small className='client_review'>
                        I had an amazing experience working on this project with Miftahul. He went beyond to make sure outcome was as desired. Definitely recommend.
                        </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client_avatar">
                        <img src={M} alt="avatar one" />
                    </div>
                    <h5 className='client_name'>Markbedol</h5>
                        <small className='client_review'>
                        Miftahul is a great developer. He truely understood the assignment and delivered to my satisfaction. He is also very reliable. I highly recommend his skills.
                        </small>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Testimonials;