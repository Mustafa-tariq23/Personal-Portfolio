import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../Data'; 

const Projects = () => (
  <div id="Projects" className="projects-grid bg-gradient-to-r from-cyan-600 to-blue-600 flex flex-wrap justify-center items-center p-12 gap-6">
    {projectsData.map(project => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
);

export default Projects;
