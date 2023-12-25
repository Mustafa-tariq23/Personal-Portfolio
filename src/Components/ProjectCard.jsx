import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projectName, description, technologies, projectId, GithubLink }) => (
  <div className="max-w-sm p-6 h-auto w-auto lg:h-[16rem] lg:w-2/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 project-card">
    <Link to={`/projects/${projectId}`} className="block mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {projectName}
    </Link>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Technologies: {technologies}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Link: <a href={GithubLink.url} target="_blank" rel="noopener noreferrer">{GithubLink.name}</a></p>
    <LinkToProjectDetails projectId={projectId} />
  </div>
);

const LinkToProjectDetails = ({ projectId }) => (
  <Link to={`/projects/${projectId}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Learn More
    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
  </Link>
);

export default ProjectCard;
