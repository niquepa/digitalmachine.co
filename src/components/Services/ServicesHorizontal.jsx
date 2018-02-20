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
    const item = this.state.data;
    return (
      <Container>
        <div className="vertical-line">
          <div className="circle-bottom" />
        </div>
        {item &&
          <div className="info-vertical">
            <h1 dangerouslySetInnerHTML={{ __html: item.caption }} />
            {/* TODO: Review lead class */}
            <p className="lead">{item.altText}</p>
          </div>
          }
      </Container>
    );
  }
}

export default ServicesHorizontal;
