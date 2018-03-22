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
        console.log(`SERVICES DATA: ${JSON.stringify(data)}`);
        this.setState({ data });
      });
  }

  render() {
    const services = this.state.data;
    services && services.map((service) => {
      console.log(`SERVICE DATA: ${JSON.stringify(service.fields)}`);
      console.log(`RENDER METHOD: ${service.fields.renderMethod.toLowerCase()}`);
    });

    return (
      <div>
        { services && services.map(service => (
          <Service data={service.fields} />
        ))}
      </div>
    );
  }
}

export default Services;
