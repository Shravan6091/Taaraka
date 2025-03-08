import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './ClientDashboard.css';

const ClientDashboard = () => {
  const [freelancers] = useState([
    { name: 'John Doe', skills: 'Web Development, React', hourlyRate: '₹500' },
    { name: 'Jane Smith', skills: 'Mobile App Development, Flutter', hourlyRate: '₹600' },
    { name: 'Alex Brown', skills: 'Graphic Design, Branding', hourlyRate: '₹400' },
  ]);

  return (
    <div className="client-dashboard-container">
      <h1>Client Dashboard</h1>
      <div className="freelancer-list">
        <h2>Freelancers Available</h2>
        <ul>
          {freelancers.map((freelancer, index) => (
            <li key={index} className="freelancer-item">
              <h3>{freelancer.name}</h3>
              <p><strong>Skills:</strong> {freelancer.skills}</p>
              <p><strong>Hourly Rate:</strong> {freelancer.hourlyRate}</p>
              <Link to={`/hire-freelancer/${index}`} className="cta-btn">Hire this Freelancer</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientDashboard;
