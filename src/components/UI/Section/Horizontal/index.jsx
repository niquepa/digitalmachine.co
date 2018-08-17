import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import SectionHorizontalItem from './Item';
import SectionHeader from '../Header';

const SectionHorizontal = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <SectionHeader title={data.title} description={data.description} />
      <div className="paddings">
        <Container>
          <div className="row">
            {data.ServiceItems && data.ServiceItems.map(item => (
              <SectionHorizontalItem item={item} key={item.sys.id} />
            ))}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

SectionHorizontal.propTypes = {
  data: PropTypes.object,  // TODO: Validate object
};

export default SectionHorizontal;
