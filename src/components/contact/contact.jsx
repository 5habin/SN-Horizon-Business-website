import React from 'react';
import './contact.css'; 
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';  // Using react-icons for icons

const Contact = () => {
  return (
    <div className='contact-section'>
      <h1 className='contact-title'>Get in Touch</h1>
      <div className='contact-container'>
        <div className='contact-info'>
          <h2>Send us a message</h2>
          <p>Feel free to reach out through contact form or find our contact information below.
             Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <div className='contact-details'>
            <p><strong><FaUser className='icon' /> Rafeek Muhammed</strong></p>
            <p><strong><FaEnvelope className='icon' /> Rafeek.m@snhorizon.com</strong></p>
            <p><strong><FaPhone className='icon' /> +33 786637021</strong></p>
          </div>
        </div>
        <form className='contact-form'>
          <input type='text' placeholder='Your Name' required />
          <input type='email' placeholder='Your Email' required />
          <textarea placeholder='Your Message' rows='4' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
