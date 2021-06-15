import React from 'react';
import './App.scss';
import Carousel from './Carousel/Carousel';
import Content from './Carousel/Components/Content/Content';
import Slide from './Carousel/Components/Slide/Slide';
import Slider from './Carousel/Components/Slider/Slider';

function App() {
  return (
    <div>
      <div className="carousel">
        <Carousel>
          {
            [1, 2, 3].map(_ => 
              <Slide>
                <Content>Sample Content</Content>
              </Slide>
            )
          }
          <Slider />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
