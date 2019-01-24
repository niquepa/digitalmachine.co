import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import SectionLogosItem from './Item';
import SectionHeader from '../Header';

const SectionLogos = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <SectionHeader title={data.title} description={data.description} />
      <div className="paddings">
        <Container>
          <div className="row">
            {data.ServiceItems && data.ServiceItems.map(item => (
              <SectionLogosItem item={item} key={item.sys.id} />
                        ))}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

SectionLogos.propTypes = {
  data: PropTypes.object, // TODO: Validate object
};

export default SectionLogos;
