import React from 'react';
import { useSelector } from 'react-redux';

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
      <p>{title}</p>
    </div>
  );
};

export default Services;
