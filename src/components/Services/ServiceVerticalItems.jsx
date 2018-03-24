import React  from 'react';

const ServiceVerticalItems = (props) => {
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

export default ServiceVerticalItems;
