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
    // Send email logic here
    // For now, just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
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
