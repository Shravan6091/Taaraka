import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for redirect
import './FreelancerRegister.css';

const FreelancerRegister = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const [freelancerInfo, setFreelancerInfo] = useState({
    name: '',
    email: '',
    skills: '',
    hourlyRate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFreelancerInfo({
      ...freelancerInfo,
      [name]: value,
    });
  };

  const handleRegister = () => {
    console.log('Freelancer Registered:', freelancerInfo);
    alert('Registration successful! Redirecting to your Freelancer Dashboard.');
    
    // Redirect to Freelancer Dashboard
    navigate('/freelancer-dashboard'); // Navigate to the Freelancer Dashboard
  };

  return (
    <div className="freelancer-register-container">
      <h1>Freelancer Registration</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={freelancerInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={freelancerInfo.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={freelancerInfo.skills}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="hourlyRate"
          placeholder="Hourly Rate"
          value={freelancerInfo.hourlyRate}
          onChange={handleInputChange}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default FreelancerRegister;
