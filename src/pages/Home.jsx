import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Video from '../components/Video/Video';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Footer from '../components/UI/Footer';
import MetaTags from '../components/Seo/MetaTags';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <MetaTags location={this.props.location} />
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
