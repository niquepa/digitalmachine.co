import React, { Component } from 'react';
import { t } from 'ttag';
import ContactForm from './Form';
import ContactMessage from './Message';

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
        <section className="content_info">
          <div className="paddings border-top">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-md-4 info-vertical">
                  <p>{ t`Want to chat about your project/problem? Enter your Name and Email Address and we'll contact you right away!` }</p>
                  <aside className="paddings">
                    <h4 className="luxury-font">{ t`The Office` }</h4>
                    <address>
                      <strong className="luxury-font luxury-color"> Digital Machine, Inc.</strong><br />
                      <i className="fa fa-map-marker luxury-color" /> <strong>{ t`Address:` } </strong> 10850 62nd Dr, Suite 2E<br />
                      <i className="fa fa-plane luxury-color" /> <strong>{ t`City:` } </strong>Forest Hills, NY 11375<br />
                      <i className="fa fa-phone luxury-color" /> <abbr title={t`Phone`}>P:</abbr> (917) 330-1301
                    </address>
                  </aside>
                </div>
                { form }
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
