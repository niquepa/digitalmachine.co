import React, { Component } from 'react';
import { Container } from 'reactstrap';

const items = [
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque cursus ante ac ullamcorper sed sit amet.',
    caption: 'Branding',
  },
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque cursus ante ac ullamcorper sed sit amet.',
    caption: 'Branding',
  },
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque cursus ante ac ullamcorper sed sit amet.',
    caption: 'Branding',
  },
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque cursus ante ac ullamcorper sed sit amet.',
    caption: 'Branding',
  },
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque cursus ante ac ullamcorper sed sit amet.',
    caption: 'Branding',
  },
  {
    src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
    altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque cursus ante ac ullamcorper sed sit amet.',
    caption: 'Branding',
  },
];

class ServiceItems extends Component {
  render() {
    return (
      <div className="paddings">
        <Container>
          <div className="row">
            {items.map(item => (
              <div className="col-sm-6 col-md-4">
                <div className="service-item">
                  <div className="head-service-item">
                    <i className="fa fa-bullhorn" />
                  </div>
                  <div className="caption-service-item">
                    <h3>{item.caption}</h3>
                    <p>{item.altText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default ServiceItems;
