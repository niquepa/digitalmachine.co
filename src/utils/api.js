import { loadContent } from './contentfulClient';

// const video = {
//   caption: 'We are Digital Transformation',
//   secondLine: 'Digital Transformation',
//   altText: 'People do not buy goods and services. They buy relations, stories and magic',
// };
// const video = {
//   caption: 'DIGITAL MARKETING',
//   secondLine: 'for Leading Brands',
//   altText: 'DigitalMachine is an award-winning full service digital marketing agency that translates brand relationships into compelling online experiences that surpass marketing goals.',
// };

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

const consultingService = {
  src: 'https://images.contentful.com/9kkanfiwhjvs/hK4MpKFX6EKQQSsOAg6kw/316c57c921b795c03d75d9709c7bafa5/pexels-photo-433604.jpeg?w=1440&h=960',
  altText: 'Co-Creamos con nuestros clientes la visión de futuro paso a paso: Realizamos juntos un análisis de como están los activos digitales actuales, cuales son las necesidades y que es lo que nuestros clientes tienen como visión de futuro.',
  caption: 'Consultoría <span>Digital</span>',
};

const consultingServiceItems = [
  {
    icon: 'fas fa-check-square',
    altText: 'Generamos realmente plataformas que transforman la forma en la que se hacen los negocios, la transformación digital va mas allá de "digitalizar una compañía", lo que buscamos son  experiencias de usuario únicas y especiales con una interfaz ideal,  adaptada a los activos digitales de nuestros clientes.',
    caption: 'Creamos recetas únicas',
  },
  {
    icon: 'fas fa-check-square',
    altText: 'La cantidad de información que estamos produciendo es tan grande que genera cambios sustanciales en los modelos de negocio, eso es Digital! Nosotros podemos ayudarlo a entender los cambios y expectativas que tienen los usuarios sobre los productos y servicios " los clientes ya no solo quieren productos y servicios, quieren experiencias simples y efectivas.',
    caption: 'Generamos cambios',
  },
];

const consultingImage = {
  src: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1511029166000/photosp/e0ef3f66-8136-47bd-9a05-1de2981a4a37/stock-photo-people-business-fun-office-game-puzzle-play-work-team-e0ef3f66-8136-47bd-9a05-1de2981a4a37.jpg',
  altText: 'DigitalMachine - Consultoría Digital',
};

const getVideo = () => (
  loadContent('homeVideo', 10)
    .then(data => data[0].fields)
);

export const getData = (content) => {
  switch (content) {
    case 'video':
      return getVideo();
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
    case 'consulting':
      return consultingService;
    case 'consultingItems':
      return consultingServiceItems;
    case 'consultingImage':
      return consultingImage;
    default:
      return null;
  }
};

