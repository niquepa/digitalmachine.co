import React, { Component } from 'react';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Servicios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Proceso</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Portafolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Nosotros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contaco</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    );
  }
}

export default Navigation;
