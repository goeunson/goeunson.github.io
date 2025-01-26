import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="contact-intro">
          I'm currently based in New York and open to new opportunities in legal tech and privacy law.
        </p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h3>📍 Location</h3>
            <p>New York, NY</p>
          </div>

          <div className="contact-method">
            <h3>📧 Email</h3>
            <a href="mailto:goeuns2190@gmail.com">goeuns2190@gmail.com</a>
          </div>
          
          <div className="contact-method">
            <h3>💼 LinkedIn</h3>
            <a href="https://linkedin.com/in/goeunson/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/goeunson
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;