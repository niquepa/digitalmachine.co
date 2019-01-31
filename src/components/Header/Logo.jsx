import React from 'react';
import { NavbarBrand } from 'reactstrap';
import logo from '../../assets/img/logo.svg';

const Logo = props => (
  <NavbarBrand href="/">
    {/*<img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />*/}
    &nbsp;Digital Machine
  </NavbarBrand>
);

export default Logo;
