import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'ttag';
import { ReCaptcha } from 'react-recaptcha-google';
import FormLoader from '../UI/Misc/Loader';
import { getLocale } from '../../utils/i18n/i18nInit';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    lang: getLocale(),
    loading: false,
  };

  onLoadRecaptcha = () => {
    if (this.dmCaptcha) {
      this.dmCaptcha.reset();
    }
  }

  executeCaptcha = (event) => {
    event.preventDefault();

    if (this.dmCaptcha) {
      this.dmCaptcha.reset();
      this.dmCaptcha.execute();
    }

    this.setState({ loading: true });
  }

  verifyCallback = (recaptchaToken) => {
    // console.log(recaptchaToken, '<= your recaptcha token');
    this.handleSubmit();
  }

  handleSubmit = () => {
    const template = 'dm-contact-home';
    const { name, email, lang } = this.state;

    this.sendFeedback(
      template,
      name,
      email,
      lang,
    );

    this.setState({ loading: false });
    this.props.formSubmitted();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendFeedback = (templateId, name, email, lang) => {
    window.emailjs
      .send('mailgun', templateId, {
        name,
        email,
        lang,
      })
      .then((res) => {
        console.log('Email sent');
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }


  render() {
    const { loading } = this.state;

    return (
      <div className="col-md-8">
        <div className="text-center">
          <FormLoader isVisible={loading} />
          <form id="form" onSubmit={this.executeCaptcha}>
            <input
              id="name"
              type="text"
              placeholder={t`Name`}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <input
              id="email"
              type="email"
              placeholder={t`Email`}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input type="submit" name="Submit" value={t`Let's chat`} className="btn btn-primary btn-lg" />
            {
              window.grecaptcha ? <ReCaptcha
                ref={(el) => {
                  this.dmCaptcha = el;
                }}
                size="invisible"
                render="explicit"
                sitekey="6LeYJY0UAAAAAITgASi9GRD843exoi0eescDR8jX"
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
                data-badge="inline"
                hl={getLocale()}
              /> : null
            }
          </form>
        </div>
      </div>
    );
  }
}

ContactForm.propTypes = {
  item: PropTypes.object, // TODO: Validate object
};

export default ContactForm;
