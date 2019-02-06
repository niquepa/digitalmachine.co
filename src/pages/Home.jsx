import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'ttag';
import Header from '../components/Header/Header';
import Video from '../components/Video/Video';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Footer from '../components/UI/Footer';
import MetaTags from '../components/Seo/MetaTags';

class Home extends Component {
  render() {
    const metaData = {
      title: t`DIGITAL TRANSFORMATION for your business`,
      description: t`Co-Create with our clients the vision of the future step by step: We carry out together an analysis of how the current digital assets are, what the needs are and what our clients have as a vision of the future.`,
      image: 'https://images.ctfassets.net/9kkanfiwhjvs/3gCyvS0nWUUgewkEcyKWq8/57c470677bccf8346c6092191c4f107c/digitalmachine-share.jpg',
    };

    return (
      <React.Fragment>
        <MetaTags location={this.props.location} metaData={metaData} />
        <Header />
        <Video />
        <Services />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object, // TODO: Validate object
};

export default Home;
