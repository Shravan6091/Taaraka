import './FreelanceServices.css';
import React from 'react';
import { Link } from 'react-router-dom';

const FreelanceServices = () => {
  return (
    <div className="freelance-services-container">
      <h1>Freelance Services</h1>
      <div className="freelance-options">
        <div className="freelance-option">
          <h2>Join Us as a Freelancer</h2>
          <p>Become a freelancer and offer your services to clients worldwide.</p>
          {/* Link updated to pass role via query parameter */}
          <Link to="/registerlogin?role=freelancer" className="cta-btn">Register as Freelancer</Link>
        </div>
        <div className="freelance-option">
          <h2>Request a Freelance Service as a Client</h2>
          <p>Find the right freelancer for your project.</p>
          {/* Link updated to pass role via query parameter */}
          <Link to="/registerlogin?role=client" className="cta-btn">Request a Freelancer</Link>
        </div>
        <div className="freelance-option">
          <h2>List of Available Freelance Projects</h2>
          <p>Browse through projects available for freelancers.</p>
          <Link to="/freelance-projects" className="cta-btn">See Available Projects</Link>
          
          
        </div>
      </div>
    </div>
  );
};

export default FreelanceServices;
