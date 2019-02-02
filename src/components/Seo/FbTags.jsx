import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FbTags extends Component {
  render() {
    const { locale, location } = this.props;
    return (
      <React.Fragment>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
      </React.Fragment>
    );
  }
}

FbTags.propTypes = {
  locale: PropTypes.string,
};

export default FbTags;
