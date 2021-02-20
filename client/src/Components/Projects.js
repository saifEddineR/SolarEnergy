import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
  const projects = useSelector((state) => state.auth.projects);
  return (
    <div>
      {projects
        ? projects.map((project) => <projectCard key={project._id} {...project} />)
        : true}
    </div>
  );
};

export const projectCard = ({ _id, title, desc, img }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Projects;
