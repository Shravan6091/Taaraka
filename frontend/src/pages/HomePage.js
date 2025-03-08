// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional CSS file for homepage styles

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1>Welcome to Our Company</h1>
        <p>Your gateway to quality training, freelance services, and career opportunities.</p>
        <Link to="/register" className="cta-btn">Get Started</Link>
      </header>
      
      <section className="features">
        {/* Training Cell Button */}
        <div className="feature-item">
          <Link to="/training-cell">
            <button className="feature-btn">Training Cell</button>
          </Link>
          <p>Access comprehensive study guides and projects for all levels.</p>
        </div>
        
        {/* Freelance Services Button */}
        <div className="feature-item">
          <Link to="/freelance-services">
            <button className="feature-btn">Freelance Services</button>
          </Link>
          <p>Join us as a freelancer or hire experts for your projects.</p>
        </div>
        
        {/* Career Opportunities Button */}
        <div className="feature-item">
          <Link to="/career-opportunities">
            <button className="feature-btn">Career Opportunities</button>
          </Link>
          <p>Explore job opportunities and work with global companies.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
