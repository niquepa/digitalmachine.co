import React from 'react';
import PropTypes from 'prop-types';
import ServiceVertical from './ServiceVertical';
import ServiceHorizontal from './ServiceHorizontal';

const isHorizontalOrVertical = function (data) {
  return (data.renderMethod || '').toLowerCase() === 'horizontal' ? ServiceHorizontal : ServiceVertical;
};

const isGrayBackground = function (index) {
  return index % 2 === 0 ? '' : 'borders gray-background';
};

const Service = (props) => {
  const { data, index } = props;
  const RenderService = isHorizontalOrVertical(data);
  const cssClass = isGrayBackground(index);

  return (
    <div className={cssClass}>
      <RenderService data={data} />
    </div>
  );
};

Service.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default Service;
