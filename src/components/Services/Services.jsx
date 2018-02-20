import React, { Component } from 'react';
import ServicesHorizontal from './ServicesHorizontal';
import ServiceHorizontalItems from './ServiceHorizontalItems';

class Services extends Component {
  render() {
    return (
      <div>
        <ServicesHorizontal data="web" />
        <ServiceHorizontalItems data="webItems" />
      </div>
    );
  }
}

export default Services;
