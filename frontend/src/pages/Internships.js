// src/pages/Internships.js
import React, { useState } from 'react';

const Internships = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    internshipType: '', // To track which internship/workshop is being applied for
  });
  const [appliedInternship, setAppliedInternship] = useState(null);

  // List of available internships and workshops
  const opportunities = [
    { id: 1, title: 'Internship at ABC Corp - Marketing' },
    { id: 2, title: 'Workshop on Data Science - XYZ Institute' },
    { id: 3, title: 'Remote Internship - Web Development' },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle the application submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send an email or save the data to the database
    alert(`Your application for "${appliedInternship}" has been submitted successfully! A confirmation email will be sent to ${formData.email}.`);
    setShowForm(false); // Hide the form after submission
    setAppliedInternship(null); // Clear the applied internship/workshop
  };

  // Function to handle applying to an internship/workshop
  const handleApply = (title) => {
    setAppliedInternship(title); // Set which internship/workshop the user is applying to
    setShowForm(true); // Show the application form
    setFormData({
      ...formData,
      internshipType: title, // Pre-fill the internship/workshop type
    });
  };

  return (
    <div className="internships-container">
      <h1>Internships & Workshops</h1>
      <p>Explore various internship and workshop opportunities around the world.</p>

      {/* List available internships/workshops */}
      <ul>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id}>
            {opportunity.title}
            <button onClick={() => handleApply(opportunity.title)}>Apply</button>
          </li>
        ))}
      </ul>

      {/* If showForm is true, display the application form */}
      {showForm && (
        <div className="application-form">
          <h2>Apply for: {appliedInternship}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="^[0-9]{10}$"
              />
            </div>

            <div>
              <button type="submit">Submit Application</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Internships;
