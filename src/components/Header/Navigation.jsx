import React, { Component } from 'react';
import { Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Navigation extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">SERVICIOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">PROCESO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CLIENTES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">NOSOTROS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CONTACTO</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Language
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                English
              </DropdownItem>
              <DropdownItem>
                Spanish
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    );
  }
}

export default Navigation;
