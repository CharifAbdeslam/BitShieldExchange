import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import {Navbar,Nav,NavLink,NavItem} from 'reactstrap';

const MenuExchange =()=>{
  return(
    <Navbar expand="md" id="exchange-nav">
    <img  className="logo-menu" src={logo} width="170" alt="BitShield"/>
      <Nav className="mr-auto ml-5" navbar>
        <NavItem>
          <NavLink className="nav-exchange-link" href="http://localhost:3000/">HOME</NavLink>
        </NavItem>
      </Nav>
      <Nav className="mr-5 nav-login" navbar>
        <NavItem className="login-nav pr-3">
          <Link to="/login">LOG IN</Link>
        </NavItem>
        <NavItem className="pl-3">
          <Link to="/signup">SIGN UP</Link>
        </NavItem>
      </Nav>
  </Navbar>
  )
}
export default MenuExchange;
