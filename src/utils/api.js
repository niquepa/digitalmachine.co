import { loadContent } from './contentfulClient';

const mediaService = {
  src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
  altText: 'Whether you need a premium position on prominent websites, or the best priced network traffic, we excel at negotiating, buying, and tracking every detail of your digital media campaigns. With over 15 years experience in buying digital media, we are known for our results and getting things done when our competition can’t.',
  caption: 'Digital <span>Media</span>',
};

const mediaServiceItems = [
  {
    icon: 'far fa-newspaper',
    altText: 'Content Management Systems',
    caption: 'Local and international media buying',
  },
  {
    icon: 'fas fa-cart-arrow-down',
    altText: 'Local and international media buying, Research, planning and negotiating for all media, Campaign setup & optimization, Detailed transparent tracking and reporting, 24/7 access to transparent reporting, Creativity & production, Competitor reviews',
    caption: 'Media Service',
  },
  {
    icon: 'fab fa-buromobelexperte',
    altText: 'Design and development of Mobile-Ready websites using Responsive Web Design (RWD)',
    caption: 'Campaign setup & optimization',
  },
];

const getVideo = () => (
  loadContent({ contentTypeId: 'homeVideo', limit: 1 })
    .then(data => (data[0] ? data[0].fields : ''))
);

const getServices = () => (
  loadContent({ contentTypeId: 'service', limit: 3, order: 'fields.order' })
    .then(data => (data))
    // .then(data => console.log(`SERVICE DATA: ${JSON.stringify(data)}`))
);

const getTechnologies = () => (
  loadContent({ contentTypeId: 'technology', limit: 5, order: 'fields.order' })
    .then(data => (data))
);

export const getData = (content) => {
  switch (content) {
    case 'video':
      return getVideo();
    case 'services':
      return getServices();
    case 'media':
      return mediaService;
    case 'mediaItems':
      return mediaServiceItems;
    case 'technologies':
      return getTechnologies();
    default:
      return null;
  }
};

