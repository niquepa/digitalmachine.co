import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { getData } from '../../utils/api';

class ServicesHorizontal extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const data = getData(this.props.data);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <div className="vertical-line">
          <div className="circle-bottom" />
        </div>
        {data &&
          <div className="info-vertical">
            <h1 className="luxury-font" dangerouslySetInnerHTML={{ __html: data.caption }} />
            {/* TODO: Review lead class */}
            <p className="lead">{data.altText}</p>
          </div>
          }
      </Container>
    );
  }
}

export default ServicesHorizontal;
