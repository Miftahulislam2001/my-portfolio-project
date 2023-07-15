import React from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_cgke0gd', 'template_9t9ad78', form.current, 'sKrTOOUT-I9rbSBZ3')
        
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <div data-aos="fade-right" data-aos-duration="1000" className="contact_option">
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>miftahullislamsohan@gmail.com</h5>
                        <a href="mailto:miftahullislamsohan@gmail.com">Send Email</a>
                      
                    </div>
                    <article data-aos="fade-right" data-aos-duration="1000" className="contact_option">
                        <RiMessengerLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>miftahull islam</h5>
                        <a href="https://m.me/miftahulislam2001" target='_blank'>Send a Massage</a>
                    </article>
                    <article data-aos="fade-right" data-aos-duration="1000" className="contact_option">
                    <BsWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+8801633615258</h5>
                        <a href="https://wa.me/+8801633615258" target='_blank'>Send a Massage</a>
                    </article>

                </div>
                
                <form data-aos="fade-left" data-aos-duration="1000" ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                        <button type="submit" className='btn btn-primary'>Send Message</button>
                    </form>
            </div>
        </section>
    );
};

export default Contact;