import '../css/service.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Services = () => {
  const services = useSelector((state) => state.auth.services);
  return (
    <div>
      <h2>services</h2>
      <div className='services-container'>
        {services
          ? services.map((service) => <ServiceCardPage key={service._id} {...service} />)
          : true}
      </div>
    </div>
  );
};

const ServiceCardPage = ({ title, img, desc }) => {
  return (
    <div className='ServiceCardPage'>
      <h5>{title} </h5>
      <p>{desc} </p>
      <span>{img ? <img src={img} alt='service' /> : <></>}</span>
    </div>
  );
};

export default Services;
