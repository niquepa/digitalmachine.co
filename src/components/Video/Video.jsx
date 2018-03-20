import React, { Component } from 'react';
import videoMp4 from '../../assets/video/TimesSquareDM-short.mp4';
import videoWebM from '../../assets/video/TimesSquareDM-short.webm';
import { getData } from '../../utils/api';

class Video extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    getData('video')
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="video-container">
        <div className="overlay" />
        <div className="container">
          <div className="title-container">
            <div className="headline">
              { data && data.title &&
                <h1 className="luxury-color">{data.title}</h1>
              }
              { data && data.subTitle &&
                <h2 className="luxury-font white">{data.subTitle}</h2>
              }
            </div>
            <div className="description d-none d-md-block">
              <div className="inner white">
                { data && data.description &&
                  data.description
                }
              </div>
            </div>
          </div>
        </div>
        <video autoPlay muted playsInline loop>
          <source src={videoWebM} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
          <p>Your browser does not support the video tag. I suggest you upgrade your browser.</p>
        </video>
      </div>
    );
  }
}

export default Video;

// TODO: convert video ffmpeg -i TimesSquareDM-short.mp4  -an -c:v libvpx-vp9 -crf 45 -b:v 0 TimesSquareDM-short.webm
