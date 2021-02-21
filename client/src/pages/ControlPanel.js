import '../css/control-panel.css';
import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Products from '../Components/Products';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import { useDispatch } from 'react-redux';
import { getProducts, getProjects, getServices } from '../action/authActions';
// import from react-icons
import { ImHome } from 'react-icons/im';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoLogoDropbox } from 'react-icons/io';
import { GiAutoRepair } from 'react-icons/gi';

// component duhh
const ControlPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProjects());
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className='control-panel'>
      <div className='control-sidebar'>
        <Link className='control-link' to='/control-panel'>
          <ImHome />
          Dashboard
        </Link>
        <Link className='control-link' to='/control-panel/Products'>
          <IoLogoDropbox />
          Products
        </Link>
        <Link className='control-link' to='/control-panel/projects'>
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>
        <Link className='control-link' to='/control-panel/services'>
          <GiAutoRepair />
          Services
        </Link>
      </div>
      <div>
        <Route exact path='/control-panel' component={Dashboard} />
        <Route path='/control-panel/products' component={Products} />
        <Route path='/control-panel/projects' component={Projects} />
        <Route path='/control-panel/services' component={Services} />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <p>dashboard here</p>
    </div>
  );
};

export default ControlPanel;
