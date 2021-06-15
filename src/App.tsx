import React from 'react';
import './App.scss';
import Carousel from './Carousel/Carousel';
import Arrow from './Carousel/Components/Arrows/Arrow';
import Content from './Carousel/Components/Content/Content';
import Slide from './Carousel/Components/Slide/Slide';
import Slider from './Carousel/Components/Slider/Slider';

function App() {
  return (
    <div>
      <div className="carousel">
        <Arrow side="left"/>
        <Arrow side="right"/>
        <Carousel>
          {
            [1, 2, 3].map(_ => 
              <Slide>
                <Content>
                  <p>Sample Content</p>
                  <button className="button-primary">Sample button</button>
                  </Content>
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
