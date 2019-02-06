import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { getLocale, urlLocalized } from '../../utils/i18n/i18nInit';
import { homepage } from '../../../package.json';

class MetaTags extends Component {
  render() {
    const locale = getLocale();
    const {
      title, description, image, video,
    } = this.props.metaData;
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        <Helmet>
          <html lang={locale} />
          <title>{ title }</title>
          <link rel="alternate" hrefLang="es" href={urlLocalized(pathname, locale, 'es')} />
          <link rel="alternate" hrefLang="x-default" href={urlLocalized(pathname, locale, 'en')} />
          {/* <FbTags locale={locale} location={this.props.location} /> TODO: Helmet doesnt allow Fragments */}
          <meta property="og:site_name" content="DigitalMachine" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${homepage}${window.location.pathname}`} />
          { title && <meta property="og:title" content={title} /> }
          { description && <meta property="og:description" content={description} /> }
          { image && <meta property="og:image" content={image} /> }
          { video && <meta property="og:video" content={video} /> }

          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
      </React.Fragment>
    );
  }
}

MetaTags.propTypes = {
  location: PropTypes.object, // TODO: Validate object
  metaData: PropTypes.object, // TODO: Validate object
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
};

export default MetaTags;
