import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Video from '../components/Video/Video';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Footer from '../components/UI/Footer';


class Home extends Component {
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

export default Home;

/*
        <Helmet>
          <html lang="en" />
          <title>DigitalMachine - English</title>
          <meta property="og:title" content="data.title" />
          <link rel="canonical" href="data.url" />
        </Helmet>
 */