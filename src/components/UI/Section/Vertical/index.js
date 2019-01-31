import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import SectionHeader from '../Header';
import SectionVerticalItem from './Item';

const SectionVertical = (props) => {
  const { data } = props;
  const image = data.image.fields;

  return (
    <React.Fragment>
      <SectionHeader title={data.title} description={data.description} />
      { data && data.ServiceItems &&
      <div className="paddings">
        <Container>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {data.ServiceItems && data.ServiceItems.map(item => (
                <SectionVerticalItem item={item} key={item.sys.id} />
              ))}
            </div>
            {image &&
            <div className="col-sm-12 col-md-6">
              <img src={image.file.url} alt={image.title} className="img-fluid" />
            </div>
            }
          </div>
        </Container>
      </div>
      }
    </React.Fragment>
  );
};

SectionVertical.propTypes = {
  data: PropTypes.object,  // TODO: Validate object
};

export default SectionVertical;
