import './FreelanceProjects.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Used for navigating to login/registration
import { useNavigate } from 'react-router-dom'; // Used for redirecting the freelancer after applying

const FreelanceProjects = () => {
  // Example data for available freelance projects. This would typically come from an API or backend.
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null); // To track if user is logged in (This would ideally come from a context or global state)
  const navigate = useNavigate();

  // Sample projects (replace with API call if necessary)
  const sampleProjects = [
    { id: 1, title: 'Web Development for E-Commerce', description: 'Build a full e-commerce website with payment gateway integration.', budget: '$1500 - $2000', category: 'Web Development' },
    { id: 2, title: 'Graphic Design for Social Media', description: 'Design promotional graphics for social media posts and ads.', budget: '$500 - $700', category: 'Graphic Design' },
    { id: 3, title: 'SEO Optimization for Blog', description: 'Optimize website for SEO to increase organic traffic.', budget: '$300 - $500', category: 'SEO' },
    { id: 4, title: 'Content Writing for Blog', description: 'Write SEO-friendly articles for a technology blog.', budget: '$100 - $300', category: 'Content Writing' },
  ];

  // Simulating fetching data from an API (You can replace this with an actual API call)
  useEffect(() => {
    setProjects(sampleProjects);
    // For demonstration, we'll set a mock user (you can replace this with actual authentication state)
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // assuming user data is saved in localStorage
    setUser(loggedInUser); // Set user if logged in
  }, []);

  // Handle Apply for Project
  const handleApply = (projectId) => {
    if (!user) {
      // If the user is not logged in, redirect them to login
      navigate('/login');
    } else {
      // Otherwise, handle project application (for now, just log the user and project they applied for)
      console.log(`${user.name} applied for project ${projectId}`);
      alert(`You have successfully applied for the project: ${projectId}`);
      // Optionally, you can update the state to reflect that the user has applied to a project
    }
  };

  return (
    <div className="freelance-projects-container">
      <h1>Available Freelance Projects</h1>
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Budget:</strong> {project.budget}</p>
              <p><strong>Category:</strong> {project.category}</p>

              {user ? (
                // If user is logged in, show "Apply" button
                <button className="cta-btn" onClick={() => handleApply(project.id)}>
                  Apply for this project
                </button>
              ) : (
                // If the user is not logged in, show "Login" or "Register" option
                <div>
                  <p>You need to   <Link to="/registerlogin?role=freelancer" className="cta-btn">Register/Login as Freelancer</Link> to apply for this project.</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No projects available at the moment. Please check back later.</p>
        )}
      </div>
    </div>
  );
};

export default FreelanceProjects;
