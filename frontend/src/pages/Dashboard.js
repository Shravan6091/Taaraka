// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Your Dashboard</h1>
      <section>
        <h2>Your Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </section>
      <section>
        <h2>Your Freelance Services</h2>
        <ul>
          <li>Freelance Project 1</li>
          <li>Freelance Project 2</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
