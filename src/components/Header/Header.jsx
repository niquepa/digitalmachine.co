import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <header className="slide">
        <div className="nav_logo animated fadeInDown">
          <div className="container">
            <div className="row">
              <Logo />
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
