// src/components/DashboardCard.js
import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ item }) => {
  const { title, description, status } = item;

  return (
    <div className="dashboard-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="dashboard-card__status">
        <span>Status: {status}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
