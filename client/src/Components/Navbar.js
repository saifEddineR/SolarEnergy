import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../action/authActions';
import { Button } from 'react-bootstrap';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div className='navbar'>
      {auth.isAuth ? (
        <></>
      ) : (
        <span>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/products'>Products</Link>
          <Link to='/services'>Services</Link>
          <Link to='/projects'>Projects</Link>
        </span>
      )}
    </div>
  );
};

export default Navbar;
