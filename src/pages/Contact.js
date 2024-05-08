import './Contact.css';
import Contactimage from '../assets/Images/contactBackground.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

   // Validate email
   const isValidEmail = /\S+@\S+\.\S+/.test(form.current.user_email.value);
   if (!isValidEmail) {
     toast.error('Please enter a valid email address.', {
       autoClose: 3000,
     });
     return;
   }

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
          toast.success('Message sent successfully!', {
            autoClose: 3000, // Duration in milliseconds
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again later.', {
            autoClose: 5000, // Duration in milliseconds
          });
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
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input className="contactButton" type="submit" value="Send" />
    </form>
    </div>
  );
};

export default Contact;