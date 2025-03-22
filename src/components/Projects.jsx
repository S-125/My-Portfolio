import React from 'react';
import ProjectCard from './ProjectCard';
import './styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CookBook',
      description: 'A recipe app where you can find 1000+ dishes to cook every day.',
      imageUrl: '/My-Portfolio/recipe.jpg',
      projectLink: 'https://s-125.github.io/CookBook/',
    },
    {
      title: 'Currency-Converter',
      description: 'Convert currencies in a click.',
      imageUrl: '/My-Portfolio/currency.jpg',
      projectLink: 'https://s-125.github.io/Currency-Convert/',
    },
    {
      title: 'WordNest',
      description: 'A dictionary built to provide meanings along with examples for better understanding.',
      imageUrl: '/My-Portfolio/dict.jpg',
      projectLink: 'https://s-125.github.io/WordNest-Dictionary/',
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'A simple game of tic-tac-toe for two players.',
      imageUrl: '/My-Portfolio/Tic-tac-toe.jpg',
      projectLink: 'https://s-125.github.io/Tic-Tac-Toe/',
    },
    {
      title: 'Note-It',
      description: 'TO-DO LIST that allows users to add, delete, and arrange tasks as per their priorities.',
      imageUrl: '/My-Portfolio/note.jpg',
      projectLink: 'https://s-125.github.io/Note-It/',
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
