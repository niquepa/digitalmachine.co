import React, { Component } from 'react';
import ServiceVertical from './ServiceVertical';
import ServiceHorizontal from './ServiceHorizontal';

class Service extends Component {
  render() {
    const { data } = this.props;
    const RenderService = data.renderMethod.toLowerCase() === 'horizontal' ? ServiceHorizontal : ServiceVertical;

    return (
      <div>
        <RenderService data={data} />
      </div>
    );
  }
}

export default Service;
