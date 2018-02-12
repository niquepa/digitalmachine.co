import React, { Component } from 'react';
import Header from '../Header/Header';
import { Container } from 'reactstrap';
// import '../../lib/css/style.css';
// import '../../lib/css/theme-responsive.css';
// import '../../lib/css/skins/red/red.css';

class App extends Component {
  render() {
    return (
      <Container id="layout" className="layout-wide">
        <Header />
      </Container>
    );
  }
}

export default App;
