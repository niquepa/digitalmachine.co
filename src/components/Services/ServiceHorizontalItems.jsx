import React from 'react';

const ServiceHorizontalItems = (props) => {
  const { item } = props;
  return (
    <div className="col-sm-6 col-md-4 text-center">
      <div className="luxury-color">
        <i className={`${item.fields.icon} fa-2x`} />
      </div>
      <div className="caption-service-item">
        <h3>{item.fields.title}</h3>
        <p>{item.fields.description}</p>
      </div>
    </div>

  );
};

export default ServiceHorizontalItems;
