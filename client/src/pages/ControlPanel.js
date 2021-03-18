import '../css/control-panel.css';
import '../css/products.css';
import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Products from '../Components/Products';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import { useDispatch } from 'react-redux';
import { getProducts, getProjects, getServices, logoutUser } from '../action/authActions';
import { getEsteem } from '../action/esteemAction';
// import from react-icons
import { ImHome } from 'react-icons/im';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoLogoDropbox } from 'react-icons/io';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { GiAutoRepair } from 'react-icons/gi';
import UserEsteem from '../Components/UserEsteem';

// component duhh
const ControlPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProjects());
    dispatch(getServices());
    dispatch(getEsteem());
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
        <Link className='control-link' to='/control-panel/userEsteem'>
          <GiAutoRepair />
          Users info
        </Link>
        <div className='nav_logout'>
          <Link id='logout' onClick={() => dispatch(logoutUser())} to='/login'>
            <span id='logout-icon'>
              <RiLogoutBoxLine />
            </span>
            <span className='logout-text'>Logout</span>
          </Link>
        </div>
      </div>
      <div className='control-content'>
        <Route exact path='/control-panel' component={Dashboard} />
        <Route path='/control-panel/products' component={Products} />
        <Route path='/control-panel/projects' component={Projects} />
        <Route path='/control-panel/services' component={Services} />
        <Route path='/control-panel/userEsteem' component={UserEsteem} />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <div className='mini-navbar'>
        <span>
          <h3>Admin Dashboard</h3>
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
