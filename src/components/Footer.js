// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@womenssafety.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" className="text-white mr-3">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.twitter.com" className="text-white mr-3">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com" className="text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <p><a href="/about" className="text-white">About Us</a></p>
            <p><a href="/services" className="text-white">Services</a></p>
            <p><a href="/contact" className="text-white">Contact</a></p>
          </div>
        </div>
        <hr />
        <p className="mb-0">&copy; {new Date().getFullYear()} Women's Safety. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
