import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './FreelancerDashboard.css';

const FreelancerDashboard = () => {
  const [projects] = useState([
    { title: 'Web Development', description: 'Build a custom website for a small business', budget: '₹20,000' },
    { title: 'Mobile App Development', description: 'Create an Android app for an e-commerce platform', budget: '₹30,000' },
    { title: 'Graphic Design', description: 'Design a logo and branding materials for a startup', budget: '₹10,000' },
  ]);

  return (
    <div className="freelancer-dashboard-container">
      <h1>Freelancer Dashboard</h1>
      <div className="available-projects">
        <h2>Available Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Budget:</strong> {project.budget}</p>
              <Link to={`/apply-project/${index}`} className="cta-btn">Apply for this Project</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
