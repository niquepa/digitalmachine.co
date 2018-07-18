import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ServiceHorizontalItems from './ServiceHorizontalItems';
import ServiceHeader from './ServiceHeader';

const ServiceHorizontal = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <ServiceHeader title={data.title} description={data.description} />
      <div className="paddings">
        <Container>
          <div className="row">
            {data.ServiceItems && data.ServiceItems.map(item => (
              <ServiceHorizontalItems item={item} key={item.sys.id} />
              ))}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

ServiceHorizontal.propTypes = {
  data: PropTypes.object,
};

export default ServiceHorizontal;
