import React from 'react';
import PropTypes from 'prop-types';

const SectionLogosItem = (props) => {
  const { item } = props;
  const image = item.fields.image.fields;

  return (
    <div className="col-sm-6 col-md-4 text-center">
      { image &&
        <img src={image.file.url} alt={image.title} className="img-fluid tech-logo" />
      }
    </div>

  );
};

SectionLogosItem.propTypes = {
  item: PropTypes.object, // TODO: Validate object
};


export default SectionLogosItem;
