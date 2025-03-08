import React from 'react';
import { useLocation } from 'react-router-dom';  // To access the passed state

const TraineeDashboard = () => {
  const location = useLocation();
  const { purchasedItems } = location.state || { purchasedItems: [] };  // Access purchased items

  return (
    <div>
      <h1>Trainee Dashboard</h1>
      <h2>Purchased Items</h2>
      {purchasedItems.length > 0 ? (
        <ul>
          {purchasedItems.map((item, index) => (
            <li key={index}>{item.title || item.name} - ₹{item.price}</li>
          ))}
        </ul>
      ) : (
        <p>No items purchased yet.</p>
      )}
    </div>
  );
};

export default TraineeDashboard;
