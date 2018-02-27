import React, { Component }   from 'react';
import ServiceVertical       from './ServiceVertical';
import ServiceVerticalItems   from './ServiceVerticalItems';
import ServiceHorizontal     from './ServiceHorizontal';
import ServiceHorizontalItems from './ServiceHorizontalItems';

class Services extends Component {
  render() {
    return (
      <div>
        <div>
          <ServiceVertical data="consulting" />
          <ServiceVerticalItems data="consultingItems" image="consultingImage" />
        </div>
        <div className="borders gray-background">
          <ServiceHorizontal data="web" />
          <ServiceHorizontalItems data="webItems" />
        </div>
      </div>
    );
  }
}

export default Services;
