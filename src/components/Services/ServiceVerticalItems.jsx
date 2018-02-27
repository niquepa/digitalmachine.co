import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { getData } from '../../utils/api';


class ServiceVerticalItems extends Component {
  state = {
    data: null,
    image: null,
  }

  componentDidMount = () => {
    const data = getData(this.props.data);
    const image = getData(this.props.image);
    this.setState({ data, image });
  }

  render() {
    const { data, image } = this.state;
    return (
      <div className="paddings">
        <Container>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {data && data.map(item => (
                <div key={item.caption} className="service-item">
                  <div className="caption-service-item">
                    <h3>
                      <i className={`${item.icon} luxury-color`} /> {item.caption}
                    </h3>
                    <p>{item.altText}</p>
                  </div>
                </div>
              ))}
            </div>
            {image &&
              <div className="col-sm-12 col-md-6">
                <img src={image.src} alt={image.altText} className="img-fluid" />
              </div>
            }
          </div>
        </Container>
      </div>
    );
  }
}

export default ServiceVerticalItems;
