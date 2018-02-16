import React, { Component } from 'react';
import { Container } from 'reactstrap';

const items = [
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: "We're your digital partner, closely collaborating to build an incredible online experience for your users We combine Technical expertise with Strategic planning to achieve your business goals.",
    caption: "We make <span>Web</span> and <span>Mobile</span> Apps",
  },
];

class Services extends Component {
  render() {
    const item = items[0];
    return (
      <Container>
        <div className="vertical-line">
          <div className="circle-bottom" />
        </div>
        <div className="info-vertical">
          <h1 dangerouslySetInnerHTML={{__html: item.caption}} />
          {/* TODO: Review lead class */}
          <p className="lead">{item.altText}</p>
        </div>
      </Container>
    );
  }
}

export default Services;
