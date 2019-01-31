import React from 'react';
import { t } from 'ttag';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { getLocale } from '../../utils/i18n/i18nInit';

// TODO: Keep the current url and redirect to the desired language
const EsLang = () => (
  <NavLink href="/es">{ t`Spanish` }</NavLink>
);
const EnLang = () => (
  <NavLink href="/">{ t`English` }</NavLink>
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
          <NavLink href={`#${t`Let's chat`}`}>{ t`Let's chat` }</NavLink>
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
