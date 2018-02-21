import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Video from '../Video/Video';

const App = props => (
  <div>
    <Header/>
    <Video />
    <Services />
    <Slider />
  </div>
);

export default App;
