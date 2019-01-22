import React from 'react';
import PropTypes from 'prop-types';

const SectionLogosItem = (props) => {
  const { item } = props;
  const image = item.fields.image.fields;

  console.log(image);

  return (
    <div className="col-sm-6 col-md-4 text-center">
      { image &&
        <img src={image.file.url} alt={image.title} className="img-fluid" />
      }
    </div>

  );
};

SectionLogosItem.propTypes = {
  item: PropTypes.object, // TODO: Validate object
};


export default SectionLogosItem;
