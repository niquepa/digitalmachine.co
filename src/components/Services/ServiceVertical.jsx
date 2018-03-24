import React  from 'react';
import { Container } from 'reactstrap';
import ServiceVerticalItems from './ServiceVerticalItems';

const ServiceVertical = (props) => {
  const { data } = props;
  const image = data.image.fields;

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
      { data && data.ServiceItems &&
      <div className="paddings">
        <Container>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {data.ServiceItems && data.ServiceItems.map(item => (
                <ServiceVerticalItems item={item} key={item.sys.id} />
                  ))}
            </div>
            {image &&
            <div className="col-sm-12 col-md-6">
              <img src={image.file.url} alt={image.title} className="img-fluid" />
            </div>
                }
          </div>
        </Container>
      </div>
        }
    </div>
  );
};

export default ServiceVertical;
