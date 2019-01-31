import React from 'react';
import PropTypes from 'prop-types';

const SectionVerticalItem = (props) => {
  const { item } = props;
  return (
    <div className="service-item">
      <div className="caption-service-item">
        <h3>
          <i className={`${item.fields.icon} luxury-color`} /> {item.fields.title}
        </h3>
        <p>{item.fields.description}</p>
      </div>
    </div>
  );
};

SectionVerticalItem.propTypes = {
  item: PropTypes.object,  // TODO: Validate object
};

export default SectionVerticalItem;
