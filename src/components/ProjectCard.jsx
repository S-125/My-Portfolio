import React from 'react';
import './styles/ProjectCard.css'; // Make sure to create this CSS file for styles

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
