import React from 'react';
import PropTypes from 'prop-types';

const VideoHeadLine = (props) => {
  const { title, subTitle, description } = props;
  return (
    <React.Fragment>
      <div className="overlay" />
      <div className="container">
        <div className="title-container">
          <div className="headline">
            <h1 className="luxury-color">{title}</h1>
            <h2 className="luxury-font white">{subTitle}</h2>
          </div>
          <div className="description d-none d-md-block">
            <div className="inner white">{description}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

VideoHeadLine.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
};

export default VideoHeadLine;
