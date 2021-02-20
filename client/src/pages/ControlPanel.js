import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Products from '../Components/Products';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import { useDispatch } from 'react-redux';
import { getProducts, getProjects, getServices } from '../action/authActions';

const ControlPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProjects());
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div>
      <Link to='/control-panel/Products'>Products</Link>
      <Link to='/control-panel/projects'>Projects</Link>
      <Link to='/control-panel/services'>Services</Link>
      <Route path='/control-panel/products' component={Products} />
      <Route path='/control-panel/projects' component={Projects} />
      <Route path='/control-panel/services' component={Services} />
      <p>all db collections : u can add, edit and delete articles</p>
    </div>
  );
};

export default ControlPanel;
