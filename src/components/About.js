// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Welcome to Women's Safety, a dedicated platform committed to providing comprehensive safety information and resources for women. Our mission is to empower women with the knowledge and tools they need to stay safe in various situations.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to create a safe and supportive environment for women by offering reliable information, resources, and services. We strive to educate and empower women to take control of their safety and well-being.
      </p>
      <h2>Our Vision</h2>
      <p>
        Our vision is a world where every woman feels safe and empowered. We aim to be a trusted source of safety information and support, helping women to navigate their lives with confidence and security.
      </p>
      <h2>Meet Our Team</h2>
      <p>
        Our team is composed of dedicated professionals who are passionate about women's safety and empowerment. We work tirelessly to provide accurate and up-to-date information and resources to our users.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Jane Doe</h5>
              <p className="card-text">Founder & CEO</p>
              <p className="card-text">Jane is a safety advocate with over 10 years of experience in women's safety and empowerment initiatives.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emily Smith</h5>
              <p className="card-text">Chief Operations Officer</p>
              <p className="card-text">Emily oversees the daily operations of Women's Safety, ensuring that our services run smoothly and efficiently.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sarah Johnson</h5>
              <p className="card-text">Head of Outreach</p>
              <p className="card-text">Sarah is responsible for our outreach programs, working to connect women with the resources they need.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
