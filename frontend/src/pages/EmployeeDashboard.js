// EmployeeDashboard.js
import React from 'react';

const EmployeeDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>
      <p>Welcome, Employee! Here is your dashboard with tasks, company news, and more.</p>
      {/* Add sections here specific to Employees */}
      <div className="section">
        <h2>Your Tasks</h2>
        {/* Display task list or to-do */}
      </div>
      <div className="section">
        <h2>Company News</h2>
        {/* Display company updates and news */}
      </div>
      <div className="section">
        <h2>Performance Tracker</h2>
        {/* Display performance or KPIs */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
