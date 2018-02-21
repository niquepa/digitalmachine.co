const video = {
  caption: 'We are Digital Transformation',
  altText: 'People do not buy goods and services. They buy relations, stories and magic',
};

const webService = {
  src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
  altText: "We're your digital partner, closely collaborating to build an incredible online experience for your users We combine Technical expertise with Strategic planning to achieve your business goals.",
  caption: 'We make <span>Web</span> and <span>Mobile</span> Apps',
};

const webServiceItems = [
  {
    icon: 'far fa-newspaper',
    altText: 'Content Management Systems',
    caption: 'CMS',
  },
  {
    icon: 'fas fa-cart-arrow-down',
    altText: 'Spree Commerce store or marketplace development, integration, customization, migration',
    caption: 'E-commerce',
  },
  {
    icon: 'fab fa-buromobelexperte',
    altText: 'Design and development of Mobile-Ready websites using Responsive Web Design (RWD)',
    caption: 'Responsive Design',
  },
];

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
    caption: 'Media Services',
  },
  {
    icon: 'fab fa-buromobelexperte',
    altText: 'Design and development of Mobile-Ready websites using Responsive Web Design (RWD)',
    caption: 'Campaign setup & optimization',
  },
];

export const getData = (content) => {
  switch (content) {
    case 'video':
      return video;
      break;
    case 'web':
      return webService;
      break;
    case 'webItems':
      return webServiceItems;
      break;
    case 'media':
      return mediaService;
    case 'mediaItems':
      return mediaServiceItems;
    default:
      return null;
  }
};
