import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../components/UI/Footer';
import MetaTags from '../components/Seo/MetaTags';


class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MetaTags location={this.props.location} />
        <Header />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;
