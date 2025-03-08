// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, price } = project;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-card__footer">
        <span>Price: ₹{price}</span>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProjectCard;
