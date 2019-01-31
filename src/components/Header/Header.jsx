import React, { Component } from 'react';
import { Container, Navbar, NavbarToggler } from 'reactstrap';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
  state = {
    isOpen: false,
    color: 'transparent',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    const { scrollY } = window;
    const { color } = this.state;
    // console.log(`Scroll event detected! SCROLLTOP:${scrollY}`);
    if (scrollY > 300 && color === 'transparent') {
      // console.log('NEGRO');
      this.setState({ color: 'primary' });
    } else if (scrollY <= 300 && color !== 'transparent') {
      // console.log('TRANSPARENTE');
      this.setState({ color: 'transparent' });
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { color } = this.state;

    return (
      <div className="layout-wide bg-primary" >
        <Navbar dark expand="md" className={`fixed-top ${color}`}>
          <Container>
            <Logo />
            <NavbarToggler onClick={this.toggle} />
            <Navigation isOpen={this.state.isOpen} />
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
