import React  from 'react';
import ServiceVertical from './ServiceVertical';
import ServiceHorizontal from './ServiceHorizontal';

const Service = (props) => {
  const { data, index } = props;
  const RenderService = data.renderMethod.toLowerCase() === 'horizontal' ? ServiceHorizontal : ServiceVertical;
  const cssClass = index % 2 === 0 ? '' : 'borders gray-background'

  return (
    <div className={cssClass}>
      <RenderService data={data} />
    </div>
  );
};

export default Service;
