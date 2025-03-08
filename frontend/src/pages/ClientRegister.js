import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for redirect
import './ClientRegister.css';

const ClientRegister = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    projectDescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({
      ...clientInfo,
      [name]: value,
    });
  };

  const handleRegister = () => {
    console.log('Client Registered:', clientInfo);
    alert('Registration successful! Redirecting to your Client Dashboard.');
    
    // Redirect to Client Dashboard
    navigate('/client-dashboard'); // Navigate to the Client Dashboard
  };

  return (
    <div className="client-register-container">
      <h1>Client Registration</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={clientInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={clientInfo.email}
          onChange={handleInputChange}
        />
        <textarea
          name="projectDescription"
          placeholder="Describe your project"
          value={clientInfo.projectDescription}
          onChange={handleInputChange}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default ClientRegister;
