import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { getLocale, urlLocalized } from '../../utils/i18n/i18nInit';

class MetaTags extends Component {
  render() {
    const locale = getLocale();
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        <Helmet>
          <html lang={locale} />
          <title>DigitalMachine</title>
          <link rel="alternate" hrefLang="es" href={urlLocalized(pathname, locale, 'es')} />
          <link rel="alternate" hrefLang="x-default" href={urlLocalized(pathname, locale, 'en')} />
        </Helmet>
      </React.Fragment>
    );
  }
}

MetaTags.propTypes = {
  location: PropTypes.object, // TODO: Validate object
};

export default MetaTags;
