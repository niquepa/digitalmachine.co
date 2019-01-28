import React, { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google';
import Header from '../Header/Header';
import Video from '../Video/Video';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../UI/Footer';


class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Video />
        <Services />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
