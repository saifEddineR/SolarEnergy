import '../css/products.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

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
    <div className='unit-card'>
      <img src={img} height='80' alt='products' />
      <span className='title'>
        <h3>{title}</h3>
        <p>{desc} </p>
      </span>
      <div className='edit-task-click'>
        <span>
          <FiEdit />
        </span>
      </div>
      <div className='btn-remove'>
        <span>
          <FaTrash />
        </span>
      </div>
    </div>
  );
};

export default Projects;
