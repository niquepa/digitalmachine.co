import React, { Component } from 'react';
import ServicesHorizontal from './ServicesHorizontal';
import ServiceHorizontalItems from './ServiceHorizontalItems';

class Services extends Component {
  render() {
    return (
      <div>
        <div>
          <ServicesHorizontal data="web" />
          <ServiceHorizontalItems data="webItems" />
        </div>
        <div className="borders gray-background">
          <ServicesHorizontal data="media" />
          <ServiceHorizontalItems data="mediaItems" />
        </div>
      </div>
    );
  }
}

export default Services;
