import React, { Component } from 'react';
import { getData } from '../../utils/api';

class TechnologyListContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    getData('technologies')
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const technologies = this.state.data;

    return (
      <React.Fragment>
        <section className="content_info">
          <div className="info_resalt">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-md-12">
                  <ul className="owl-carousel carousel-sponsors tooltip-hover" id="carousel-sponsors">
                    { technologies && technologies.map((technology, index) => (
                      <li data-toggle="tooltip" title data-original-title={technology.fields.title} key={technology.sys.id}>
                        <a href="#" className="tooltip_hover" title="Name Sponsor">
                          <img src={technology.fields.logo.fields.file.url} alt={technology.fields.title} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TechnologyListContainer;
