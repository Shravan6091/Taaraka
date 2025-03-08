// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client for React 18+
import './index.css'; // Optional: Global styles for your app
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using the new API
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
