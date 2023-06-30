import React from 'react';
import './Testimonials.css'
import avatar from '../../assets/sohan.png'

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
                        <img src={avatar} alt="avatar one" />
                    </div>
                    <h5 className='client_name'>Miftahul Islam sohan</h5>
                        <small className='client_review'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat exercitationem facere reprehenderit ducimus vero aliquam consectetur labore, asperiores obcaecati distinctio expedita nobis dolor illum dignissimos, recusandae itaque beatae dolores aut.
                        </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client_avatar">
                        <img src={avatar} alt="avatar one" />
                    </div>
                    <h5 className='client_name'>Miftahul Islam sohan</h5>
                        <small className='client_review'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat exercitationem facere reprehenderit ducimus vero aliquam consectetur labore, asperiores obcaecati distinctio expedita nobis dolor illum dignissimos, recusandae itaque beatae dolores aut.
                        </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client_avatar">
                        <img src={avatar} alt="avatar one" />
                    </div>
                    <h5 className='client_name'>Miftahul Islam sohan</h5>
                        <small className='client_review'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat exercitationem facere reprehenderit ducimus vero aliquam consectetur labore, asperiores obcaecati distinctio expedita nobis dolor illum dignissimos, recusandae itaque beatae dolores aut.
                        </small>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Testimonials;