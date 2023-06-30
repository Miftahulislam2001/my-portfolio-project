import React from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>miftahullislamsohan@gmail.com</h5>
                        <a href="mailto:miftahullislamsohan@gmail.com" target='_blank'>Send a Massage</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>miftahullislam@gmail.com</h5>
                        <a href="https://m.me/miftahulislam2001" target='_blank'>Send a Massage</a>
                    </article>
                    <article className="contact_option">
                    <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>miftahullislam@gmail.com</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801633615258" target='_blank'>Send a Massage</a>
                    </article>


                    <form>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;