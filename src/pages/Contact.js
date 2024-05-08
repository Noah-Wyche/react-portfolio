import './Contact.css';
import Contactimage from '../assets/Images/contactBackground.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pcgq2hk', 
        'contact-form', 
        form.current,
        'p9yAZ3Rqu_LCG-xH1'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <div className="ContactContainer">
    <h1 className="ContactTitle">Contact</h1>
    <div className="ContactBar">
        <img className="ContactImage" src={Contactimage} alt="Contact" />
      </div>
      <h2 className="ContactSubtitle">Submit the form to send me a message!</h2>
    <form className='ContactForm' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="contactButton" type="submit" value="Send" />
    </form>
    </div>
  );
};

export default Contact;