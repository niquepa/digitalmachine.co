import React, { Component } from 'react';
import { Container, Navbar, NavbarToggler } from 'reactstrap';
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
      <Container>
        <Navbar sticky="top" color="primary" dark expand="md">
          <Logo />
          <NavbarToggler onClick={this.toggle} />
          <Navigation isOpen={this.state.isOpen} />
        </Navbar>
      </Container>
    );
  }
}

export default Header;
