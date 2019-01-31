import { addLocale, useLocale } from 'ttag';
import * as cookie from './cookie';

const LOCALE_COOKIE = '__locale';

export function getLocale() {
  return cookie.get(LOCALE_COOKIE) || 'en';
}

export function saveLocale(locale) {
  cookie.set(LOCALE_COOKIE, locale);
}

export function checkLocaleinUrl() {
  const match = /^\/(es|en)/gi.exec(window.location.pathname);
  if (match && typeof match[1] !== 'undefined') {
    if (getLocale() !== match[1]) {
      saveLocale(match[1]);
    }
  } else {
    saveLocale('en');
  }
}

// setup
checkLocaleinUrl();
const locale = getLocale();

if (locale !== 'en') {
  const translationsObj = require(`./${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}

// yarn ttag update src/utils/i18n/es.po src/
// yarn ttag po2json src/utils/i18n/es.po > src/utils/i18n/es.po.json
