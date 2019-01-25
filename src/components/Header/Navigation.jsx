import React, { Component } from 'react';
import { t } from 'ttag';
import { Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { saveLocale } from '../../utils/i18n/i18nInit';

const setLocale = locale => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
};

class Navigation extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">{ t`Services` }</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">{ t`Process` }</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">{ t`Customers` }</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">{ t`About Us` }</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">{ t`Contact` }</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              { t`Language` }
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <a href="/" onClick={setLocale('en')}>{ t`English` }</a>
              </DropdownItem>
              <DropdownItem>
                <a href="/" onClick={setLocale('es')}>{ t`Spanish` }</a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    );
  }
}

export default Navigation;
