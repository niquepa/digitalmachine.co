import React, { Component } from 'react';
import videoMp4 from '../../assets/video/TimesSquareDM-short.mp4';
import videoWebM from '../../assets/video/TimesSquareDM-short.webm';
import { getData } from '../../utils/api';
import VideoHeadLine from './VideoHeadLine';

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
        {data &&
          <VideoHeadLine
            title={data.title}
            subTitle={data.subTitle}
            description={data.description}
          />
        }
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
