import React from 'react';
import PropTypes from 'prop-types';
import SectionHorizontal from './Horizontal';
import SectionVertical from './Vertical';

const isHorizontalOrVertical = function (data) {
  return (data.renderMethod || '').toLowerCase() === 'horizontal' ? SectionHorizontal : SectionVertical;
};

const Section = (props) => {
  const { data, altBackground } = props;
  const RenderSection = isHorizontalOrVertical(data);
  const cssClass = altBackground ? 'borders gray-background' : '';

  return (
    <div className={cssClass}>
      <RenderSection data={data} />
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.object, // TODO: Validate object
  altBackground: PropTypes.boolean,
};

export default Section;
