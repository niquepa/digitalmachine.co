import React, { Component } from 'react';
import Service from './Service';
import { getData } from '../../utils/api';

class Services extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    getData('services')
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const services = this.state.data;

    return (
      <div>
        { services && services.map((service, index) => (
          <Service data={service.fields} key={service.sys.id} index={index} />
        ))}
      </div>
    );
  }
}

export default Services;
