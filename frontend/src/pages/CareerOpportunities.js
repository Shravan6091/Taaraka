import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CareerOpportunites.css';

const CareerOpportunities = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    role: 'pilot', // Default to pilot, can add more roles like developer if necessary
  });

  const [pilotCode, setPilotCode] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(false); // Track if payment is done
  const [showGlobalOpportunities, setShowGlobalOpportunities] = useState(false); // To control global opportunities section visibility
  const [vacancies, setVacancies] = useState([]); // Holds the list of job vacancies (mocked data)

  const navigate = useNavigate(); // Hook for navigation

  // Mock vacancies data (This can later be replaced with API data)
  const mockVacancies = [
    { id: 1, title: 'Software Developer', location: 'Remote', company: 'Tech Corp' },
    { id: 2, title: 'Pilot', location: 'Mumbai, India', company: 'Airways Ltd.' },
    { id: 3, title: 'Data Scientist', location: 'San Francisco, USA', company: 'Innovative Solutions' },
  ];

  // Function to handle showing global opportunities
  const showVacancies = () => {
    setVacancies(mockVacancies);
    setShowGlobalOpportunities(true);
  };

  // Function to handle applying for a job
  const handleApply = (vacancyTitle) => {
    alert(`You have applied for the position of ${vacancyTitle}. We will contact you soon.`);
  };

  // Navigate to RegisterLogin.js when "Register as Pilot" is clicked
  const handlePilotRegistration = () => {
    navigate('/registerLogin'); // Navigate to RegisterLogin.js (as per the route in App.js)
  };

  return (
    <div className="career-opportunities-container">
      <h1>Career Opportunities</h1>

      {/* Work with Us Section */}
      <div>
        <h2>Work with Us as a Pilot, Developer, etc.</h2>
        <p>Register to work as a Pilot. After registration, you will be assigned a unique pilot code.</p>

        {/* Show Register button first */}
        <button onClick={handlePilotRegistration}>
          Register as Pilot
        </button>

        {/* Global Opportunities Section */}
        <div>
          <h2>Global Opportunities</h2>
          <p>Find job openings in various global companies.</p>

          {/* Button to display job vacancies */}
          {!showGlobalOpportunities ? (
            <button onClick={showVacancies}>View Available Vacancies</button>
          ) : (
            // Display list of vacancies after button click
            <div>
              <h3>Available Vacancies:</h3>
              <ul>
                {vacancies.map((vacancy) => (
                  <li key={vacancy.id}>
                    <strong>{vacancy.title}</strong> - {vacancy.location} ({vacancy.company})
                    <button onClick={() => handleApply(vacancy.title)}>Apply</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;
