// src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      // Replace the URL with your actual endpoint
      await axios.post('/api/contact', contactData);
      setSubmitted(true);
    } catch (error) {
      console.error('There was an error submitting the contact form', error);
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, feel free to reach out to us. We are here to help.</p>
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
