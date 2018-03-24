import React  from 'react';
import { Container } from 'reactstrap';
import ServiceHorizontalItems from './ServiceHorizontalItems';

const ServiceHorizontal = (props) => {
  const { data } = props;
  console.log(`SERVICE HORIZONTAL ${data.title}: ${JSON.stringify(data)}`);
  return (
    <div>
      <Container>
        <div className="vertical-line">
          <div className="circle-bottom" />
        </div>
        {data &&
          <div className="info-vertical text-center">
            <h1 className="luxury-font" dangerouslySetInnerHTML={{ __html: data.title }} />
            {/* TODO: Review lead class */}
            <p className="lead">{data.description}</p>
          </div>
          }
      </Container>
      <div className="paddings">
        <Container>
          <div className="row">
            {data.ServiceItems && data.ServiceItems.map(item => (
              <ServiceHorizontalItems item={item} key={item.sys.id} />
              ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServiceHorizontal;
