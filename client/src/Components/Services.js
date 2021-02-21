import '../css/products.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
const Services = () => {
  const services = useSelector((state) => state.auth.services);
  return (
    <div>
      {services
        ? services.map((service) => <ServiceCard key={service._id} {...service} />)
        : true}
    </div>
  );
};

export const ServiceCard = ({ _id, title, img, desc }) => {
  return (
    <div>
      <div className='unit-card'>
        <img src={img} height='80' alt='service' />
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
    </div>
  );
};

export default Services;
