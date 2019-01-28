import React from 'react';
import { t } from 'ttag';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="footer_top">
        <div className="coopring">
          <p>&copy; {year} DigitalMachine.co { t`All rights reserved` }</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
