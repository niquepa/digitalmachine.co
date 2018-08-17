import React, { Component } from 'react';
import { getData } from '../../utils/api';
import Section from '../UI/Section';

const altBackground = function (index) {
  return index % 2 === 0 ? false : true;
};

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
          <Section data={service.fields} key={service.sys.id} altBackground={altBackground(index)} />
        ))}
      </div>
    );
  }
}

export default Services;
