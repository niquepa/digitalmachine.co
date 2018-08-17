import React        from 'react';
import Header       from '../Header/Header';
import Slider       from '../Slider/Slider';
import Services     from '../Services/Services';
import Video        from '../Video/Video';
// import Carousel     from '../Carousel';
import Technologies from "../Technologies";

const App = props => (
  <div>
    <Header />
    <Video />
    <Services />
    <Technologies />
    <Slider />
  </div>
);

export default App;
