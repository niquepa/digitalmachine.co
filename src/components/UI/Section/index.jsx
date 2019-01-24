import React from 'react';
import PropTypes from 'prop-types';
import SectionHorizontal from './Horizontal';
import SectionVertical from './Vertical';
import SectionLogos from './Logos';

const renderSectionMethod = (data) => {
  switch ((data.renderMethod || '').toLowerCase()) {
    case 'horizontal':
      return SectionHorizontal;
    case 'vertical':
      return SectionVertical;
    case 'logos':
      return SectionLogos;
    default:
      console.log('No render method provided');
      return null;
  }
};

const Section = (props) => {
  const { data, altBackground } = props;
  const RenderService = renderSectionMethod(data);
  const cssClass = altBackground ? 'borders gray-background' : '';

  return (
    <div className={cssClass}>
      <RenderService data={data} />
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.object, // TODO: Validate object
  altBackground: PropTypes.boolean,
};

export default Section;
