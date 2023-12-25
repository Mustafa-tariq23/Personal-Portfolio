import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../Data'; // Adjust the path


const ProjectDetails = () => {
  const { projectId } = useParams();
  console.log("projectId:", projectId); // Add this line

  // Console log the projectsData array
  console.log("projectsData:", projectsData);

  // Convert projectId to a string for comparison
  // const project = projectsData.find(proj => String(proj.id) === projectId);
  const project = projectsData.find(proj => String(proj.id) === String(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div className="project-details">
      <h2>{project.projectName}</h2>
      <p>{project.description}</p>
      <p>Technologies: {project.technologies}</p>
    </div>
  );
};

export default ProjectDetails;
