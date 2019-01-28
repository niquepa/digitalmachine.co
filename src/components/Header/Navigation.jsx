import React from 'react';
import { t } from 'ttag';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { saveLocale, getLocale } from '../../utils/i18n/i18nInit';

const setLocale = locale => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
};

const EsLang = () => (
  <NavLink href="/" onClick={setLocale('es')}>{ t`Spanish` }</NavLink>
);
const EnLang = () => (
  <NavLink href="/" onClick={setLocale('en')}>{ t`English` }</NavLink>
);

const Navigation = (props) => {
  const { isOpen } = props;

  const langSwitcher = getLocale() === 'en' ? <EsLang /> : <EnLang />;

  return (
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href={`#${t`Services`}`}>{ t`Services` }</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`#${t`Technologies`}`}>{ t`Technologies` }</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`#${t`Contact`}`}>{ t`Contact` }</NavLink>
        </NavItem>
        <NavItem>
          { langSwitcher }
        </NavItem>
      </Nav>
    </Collapse>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool,
};

export default Navigation;
