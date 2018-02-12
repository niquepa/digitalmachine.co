import React from 'react';
import logo from '../../assets/img/logo.png';

const Logo = props => (
  <div className="col-md-3 logo">
    <a href="/" title="Back to Home">
      <img src={logo} alt="Logo" className="logo_img" />
    </a>
  </div>
);

export default Logo;
