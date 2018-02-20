import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { getData } from '../../utils/api';


class ServiceHorizontalItems extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const data = getData(this.props.data);
    this.setState({ data });
  }

  render() {
    const items = this.state.data;
    return (
      <div className="paddings">
        <Container>
          <div className="row">
            {items && items.map(item => (
              <div key={item.caption} className="col-sm-6 col-md-4">
                <div className="service-item">
                  <div className="icon-header">
                    <i className={`${item.icon} fa-2x`} />
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

export default ServiceHorizontalItems;
