// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <p>
        We offer a range of services aimed at ensuring the safety and well-being of women. Our dedicated team works tirelessly to provide the following services:
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Counseling Services</h5>
              <p className="card-text">
                Our professional counselors are available to provide emotional support and guidance to women in need.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Legal Assistance</h5>
              <p className="card-text">
                We offer legal assistance to help women understand their rights and navigate through legal processes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Self-Defense Training</h5>
              <p className="card-text">
                Our self-defense training programs are designed to empower women with the skills needed to protect themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emergency Shelters</h5>
              <p className="card-text">
                We provide access to emergency shelters for women in immediate need of a safe place to stay.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Support Groups</h5>
              <p className="card-text">
                Our support groups offer a safe space for women to share their experiences and receive peer support.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Education and Workshops</h5>
              <p className="card-text">
                We conduct educational workshops and seminars to raise awareness about women's safety and rights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
