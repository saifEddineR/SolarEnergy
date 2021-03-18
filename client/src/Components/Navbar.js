import React, { useState } from 'react';
import '../css/navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbarr = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return <div className='navbar'>{auth.isAuth ? <></> : <NavBarClient />}</div>;
};

const NavBarClient = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleCollapse = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <MDBNavbar color='indigo' dark expand='sm' className='bootstrap-nav'>
      <MDBNavbarBrand>
        <strong className='white-text'>SOLAR ENERGY</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => toggleCollapse()} />
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink exact to='/'>
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/products'>products</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/projects'>projects</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/services'>services</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/contact'>Contact</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right></MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbarr;
