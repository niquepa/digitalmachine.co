import { createClient } from 'contentful';

export const client = createClient({
  space: '9kkanfiwhjvs',
  accessToken: '632c0cfa1127702328cae06a9fe79b8af5d1ce9b2b9739bb25ea1cd7e6e096ed',
});

export const loadContent = ({
  contentTypeId, limit, locale = 'en-US', order = 'sys.createdAt',
}) => (
  client.getEntries({
    content_type: contentTypeId,
    limit,
    locale,
    order,
  }).then(payload => payload.items)
);
