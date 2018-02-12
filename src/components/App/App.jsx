import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="layout-wide bg-primary" >
        <Header />
      </div>
    );
  }
}

export default App;
