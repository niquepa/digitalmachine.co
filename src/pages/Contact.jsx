import React, { Component } from 'react';
import Helmet from './Home';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../components/UI/Footer';


class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;
