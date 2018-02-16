import React        from 'react';
import Header       from '../Header/Header';
import Slider       from '../Slider/Slider';
import Services     from "../Services/Services";
import ServiceItems from "../Services/ServiceItems";

const App = props => (
  <div>
    <Header />
    <Slider />
    <Services/>
    <ServiceItems/>
  </div>
);

export default App;
