// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  // Check if the user is authenticated
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
      setUserType(JSON.parse(user).role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserType(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">TaarakaMetacoreIT</Link>
      </div>
      <ul className="navbar__links">
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/vision-mission">Vision & Mission</Link></li>
        <li><Link to="/training-cell">Training Cell</Link></li>
        <li><Link to="/freelance-services">Freelance Services</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/research-development">Research & Development</Link></li>
        <li><Link to="/career-opportunities">Career Opportunities</Link></li>
        <li><Link to="/social-responsibility">Social Responsibility</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        {!isAuthenticated ? (
          <li><Link to="/RegisterLogin">RegisterLogin</Link></li>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
        {isAuthenticated && userType === 'admin' && (
          <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
        )}
        {isAuthenticated && userType === 'freelancer' && (
          <li><Link to="/freelancer-dashboard">Freelancer Dashboard</Link></li>
        )}
        {isAuthenticated && userType === 'client' && (
          <li><Link to="/client-dashboard">Client Dashboard</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
