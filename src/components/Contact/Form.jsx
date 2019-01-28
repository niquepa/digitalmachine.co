import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'ttag';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const template = 'dm-contact-home';
    const { name, email, phone } = this.state;

    this.sendFeedback(
      template,
      name,
      email,
      phone,
    );

    this.props.formSubmitted();
  }

  sendFeedback = (templateId, name, email, phone) => {
    window.emailjs
      .send('mailgun', templateId, {
        name,
        email,
        phone,
      })
      .then((res) => {
        console.log('Email sent');
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    // const { formSubmitted } = this.props;
    return (
      <div className="col-md-8">
        <form id="form" onSubmit={this.handleSubmit}>
          <input id="name" type="text" placeholder={ t`Name` } name="name" value={this.state.name} onChange={this.handleChange} required />
          <input id="email" type="email" placeholder={ t`Email` } name="email" value={this.state.email} onChange={this.handleChange} required />
          { /* Todo: Make ReCaptcha invisible */ }
          <div className="g-recaptcha" data-sitekey="6Le57osUAAAAACEF0_s3mZIRPZIq8z0V4n4ggb2a" />
          <input type="submit" name="Submit" value={ t`Let's chat` } className="btn btn-primary btn-lg" />
        </form>
        <div id="result" />
      </div>
    );
  }
}

ContactForm.propTypes = {
  item: PropTypes.object, // TODO: Validate object
};

export default ContactForm;
