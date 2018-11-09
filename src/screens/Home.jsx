import React from 'react';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import ServiceListContainer from '../components/Service/List';
import Video from '../components/Video/Video';
import TechnologyListContainer from '../components/Technology/List';

const Home = props => (
  <div>
    <Header />
    <Video />
    <ServiceListContainer />
    <TechnologyListContainer />
    <Slider />
  </div>
);

export default Home;
