import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // Validate email
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setErrorMessage('Invalid email address.');
      return;
    }
  
    try {
      // Send email
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
      
      // Optionally, display a success message to the user
      alert('Your message has been sent successfully!');
    } catch (error) {
      // Handle any errors
      console.error('Failed to send email:', error);
      setErrorMessage('Failed to send email. Please try again later.');
    }
  };
  

  return (
    <div className="ContactContainer">
      <h1 className="ContactTitle">Contact</h1>
      <form className="ContactForm" onSubmit={handleFormSubmit}>
        <div className="FormField">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="FormField">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="FormField">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="contactButton">Submit</button>
        {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
