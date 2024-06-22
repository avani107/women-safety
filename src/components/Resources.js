// src/components/Resources.js
import React from 'react';

const Resources = () => {
  return (
    <div className="container">
      <h1>Resources</h1>
      <p>Find a variety of resources to help you stay safe, including articles, videos, and guides.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Safety Articles</h5>
              <p className="card-text">Read our collection of articles on personal safety, self-defense tips, and more.</p>
              <a href="#articles" className="btn btn-primary">Read Articles</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Video Tutorials</h5>
              <p className="card-text">Watch videos on self-defense techniques, safety tips, and emergency preparedness.</p>
              <a href="#videos" className="btn btn-primary">Watch Videos</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Safety Guides</h5>
              <p className="card-text">Download our comprehensive guides on various safety topics.</p>
              <a href="#guides" className="btn btn-primary">Download Guides</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
