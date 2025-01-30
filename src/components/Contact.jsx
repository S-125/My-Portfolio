import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you'd like to work together or have any questions, feel free to reach out!</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>
            You can email me directly at: 
            <a href="mailto:sritamamitra125@gmail.com">sritamamitra125@gmail.com</a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>
            You can reach me at: 
            <a href="tel: +91 8240262612">+91 8240262612</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
