import React, { Component } from 'react';
import { Navbar, NavbarToggler } from 'reactstrap';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar sticky="top" color="dark" dark expand="md">
        <Logo />
        <NavbarToggler onClick={this.toggle} />
        <Navigation isOpen={this.state.isOpen} />
      </Navbar>
    );
  }
}

export default Header;
