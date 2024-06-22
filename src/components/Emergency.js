// src/components/Emergency.js
import React from 'react';

const Emergency = () => {
  return (
    <div className="container">
      <h1>Emergency Contacts</h1>
      <p>
        If you are in immediate danger or need urgent assistance, please contact one of the following emergency services:
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Police</h5>
              <p className="card-text">Call 911 for immediate police assistance.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emergency Medical Services</h5>
              <p className="card-text">Call 911 for medical emergencies and urgent health issues.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Domestic Violence Hotline</h5>
              <p className="card-text">Call 1-800-799-SAFE (7233) for confidential support and resources.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sexual Assault Hotline</h5>
              <p className="card-text">Call 1-800-656-HOPE (4673) for confidential support and resources.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">National Suicide Prevention Lifeline</h5>
              <p className="card-text">Call 1-800-273-TALK (8255) for mental health emergencies.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Local Shelters</h5>
              <p className="card-text">Find local shelters and safe houses for immediate refuge.</p>
              <a href="/resources" className="btn btn-primary">Find Shelters</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
