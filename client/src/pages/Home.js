import '../css/home.css';
import React from 'react';
import Slider from '../Components/Home/Slider';
import Intro from '../Components/Home/Intro';
import ServicesHome from '../Components/Home/ServicesHome';
import ProjectsHome from '../Components/Home/ProjectsHome';
import FooterHome from '../Components/Home/FooterHome';

const Home = (props) => {
  return (
    <div className='home-container'>
      <Slider />
      <Intro />
      <ServicesHome />
      <ProjectsHome />
    </div>
  );
};

export default Home;
