import { createClient } from 'contentful';
import { getLocale } from './i18n/i18nInit';

export const client = createClient({
  space: '9kkanfiwhjvs',
  accessToken: '632c0cfa1127702328cae06a9fe79b8af5d1ce9b2b9739bb25ea1cd7e6e096ed',
});

const contentfulLocale = () => (getLocale() === 'en' ? 'en-US' : 'es');

export const loadContent = ({
  contentTypeId, limit, locale = contentfulLocale(), order = 'sys.updatedAt',
}) => (
  client.getEntries({
    content_type: contentTypeId,
    limit,
    locale,
    order,
  }).then(payload => payload.items)
);
