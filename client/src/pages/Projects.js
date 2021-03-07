import '../css/projectsPage.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

const Projects = () => {
  const projects = useSelector((state) => state.auth.projects);
  return (
    <div className='projects-page' >
      {projects ? (
        projects.map((project) => <Card key={project._id} {...project} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Projects;
