import React from 'react';
import { t } from 'ttag';

const ContactMessage = () => (
  <div className="col-md-8 info-vertical">
    <h4 className="luxury-font"><span>{ t`We got your info` }</span></h4>
    <p>{ t`We'll contact you very soon!` }</p>
  </div>
);

export default ContactMessage;
