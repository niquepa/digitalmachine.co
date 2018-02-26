import React, { Component } from 'react';
import videoFile            from '../../assets/video/TimesSquareDM-short.mp4';
import { getData }          from "../../utils/api";

class Video extends Component {
  state = {
    data: null,
  }
  
  componentDidMount = () => {
    const data = getData('video');
    this.setState({ data });
  }
  
  render() {
    const { data } = this.state;
    return (
      <div className="video-container">
        <div className="title-container">
          <div className="headline">
            { data && data.caption &&
              <h1>{data.caption}</h1>
            }
          </div>
          <div className="description d-none d-md-block">
            <div className="inner">
              { data && data.altText &&
                data.altText
              }
            </div>
          </div>
        </div>
        <video autoPlay muted playsInline loop>
          <source src={videoFile} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    );
  }
}

export default Video;
