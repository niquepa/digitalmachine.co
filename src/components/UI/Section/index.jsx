import React from 'react';
import PropTypes from 'prop-types';
import SectionHorizontal from './Horizontal';
import SectionVertical from './Vertical';

const isHorizontalOrVertical = function (data) {
  return (data.renderMethod || '').toLowerCase() === 'horizontal' ? SectionHorizontal : SectionVertical;
};

const Section = (props) => {
  const { data, background } = props;

  const RenderSection = isHorizontalOrVertical(data);
  const cssClass = background ? 'borders gray-background' : '';

  return (
    <div className={cssClass}>
      <RenderSection data={data} />
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.object, // TODO: Validate object
  background: PropTypes.boolean,
};

export default Section;
