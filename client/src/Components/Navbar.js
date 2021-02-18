import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../action/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logout = () => {};

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/products'>Products</Link>
      <Link to='/services'>Services</Link>
      <Link to='/projects'>Projects</Link>
      {auth.isAuth ? <Link onClick={() => dispatch(logoutUser())}>Logout</Link> : <></>}
    </div>
  );
};

export default Navbar;
