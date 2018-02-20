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


export const getData = (content) => {
  switch (content) {
    case 'web':
      return webService;
      break;
    case 'webItems':
      return webServiceItems;
      break;
    default:
      return null;
  }
};
