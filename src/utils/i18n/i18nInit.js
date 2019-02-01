import { addLocale, useLocale } from 'ttag';
import * as cookie from './cookie';

//const LOCALE_COOKIE = '__locale';

export function getLocale() {
  //return cookie.get(LOCALE_COOKIE) || 'en';
  return checkLocaleinUrl();
}

//export function saveLocale(locale) {
//  cookie.set(LOCALE_COOKIE, locale);
//}

export function checkLocaleinUrl() {
  const match = /^\/(es)/gi.exec(window.location.pathname);
  if (match && typeof match[1] !== 'undefined') {
    //if (getLocale() !== match[1]) {
      //saveLocale(match[1]);
      return match[1];
    //}
  } else {
    //saveLocale('en');
    return "en";
  }
}

// setup
//checkLocaleinUrl();
//const locale = getLocale();
const locale = checkLocaleinUrl();

if (locale !== 'en') {
  const translationsObj = require(`./${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}

/*
METATAGS FUNCTIONS
*/
const addLocaleToUrl = (url, toLocale) => `/${toLocale}${url}`;

const removeLocaleFromUrl = (url, toLocale) => url.replace(`/${toLocale}`, '') || '/';

export const urlLocalized = (url, fromLocale, toLocale) => {
  // console.log(`Params URL:*${url}* FROM:*${fromLocale}* TO:*${toLocale}*`);
  let localized = url;
  if (fromLocale === toLocale) {
    // console.log('SON IGUALES')
    localized = url;
  } else if (fromLocale === 'en') {
    // console.log('FROM ES EN')
    localized = addLocaleToUrl(url, toLocale);
  } else if (toLocale === 'en') {
    // console.log('TO ES EN')
    localized = removeLocaleFromUrl(url, fromLocale);
  }

  // console.log(`LOCALE:*${toLocale}* URL:*${localized}*`);
  return `${window.location.protocol}//${window.location.hostname}${localized}`;
};

// yarn ttag update src/utils/i18n/es.po src/
// yarn ttag po2json src/utils/i18n/es.po > src/utils/i18n/es.po.json
