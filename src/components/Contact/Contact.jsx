import React, { Component } from 'react';
import { t } from 'ttag';
import ContactForm from './Form';
import ContactMessage from './Message';
import { Container } from 'reactstrap';

class Contact extends Component {
  state = {
    formSubmitted: false,
  };

  formSubmitted = () => {
    this.setState({
      formSubmitted: true,
    });
  }

  render() {
    const isFormSubmitted = this.state.formSubmitted;
    let form;

    if (isFormSubmitted) {
      form = <ContactMessage />;
    } else {
      form = <ContactForm formSubmitted={this.formSubmitted} />;
    }

    return (
      <React.Fragment>
        <Container id={t`Let's chat`}>
          <div className="vertical-line">
            <div className="circle-bottom" />
          </div>
          <div className="info-vertical">
            <h1 className="luxury-font" ><span>{ t`Chat with Us Now` }</span></h1>
            <p className="lead">
              { t`Want to chat about your project/problem? Enter your Name and Email Address and we'll contact you right away!` }
            </p>
          </div>
          <div className="paddings">
            <Container>
              <div className="row">
                <div className="col-md-4 info-vertical">
                  <aside>
                    <h4 className="luxury-font">{ t`The Office` }</h4>
                    <address>
                      <strong className="luxury-font luxury-color"> Digital Machine, Inc.</strong><br />

                      <i className="fa fa-map-marker-alt luxury-color" /> <strong>{ t`Address:` } </strong> 31-11 Garfield Pl<br />
                      <i className="fa fa-city luxury-color" /> <strong>{ t`City:` } </strong>Fair Lawn, NJ 07410<br />
                      <i className="fa fa-mobile-alt luxury-color" /> <abbr title={t`Phone`}>P:</abbr> (917) 330-1301
                    </address>
                  </aside>
                </div>
                { form }
              </div>
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
