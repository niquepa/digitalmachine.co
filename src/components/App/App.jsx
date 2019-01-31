import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-google';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <Switch>
        <Route path="/:locale(en|es)?/contact" component={Contact} />
        <Route exact path="/:locale(en|es)?" component={Home} />
      </Switch>
    );
  }
}

export default App;
