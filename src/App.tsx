import React from 'react';
import './App.scss';
import Carousel from './Carousel/Carousel';
import Arrow from './Carousel/Components/Arrows/Arrow';
import Content from './Carousel/Components/Content/Content';
import Slide from './Carousel/Components/Slide/Slide';
import Slider from './Carousel/Components/Slider/Slider';
import { carouselData } from './Carousel/Mock/Carousel';

function App() {
  return (
    <div>
      <div className="carousel">
        <Carousel>
          <Arrow side="left"/>
          <Arrow side="right"/>
          {
            carouselData.map(slide => 
              <Slide bgImage={slide.url} key={slide.id}>
                <Content>
                  <p>Sample Content</p>
                  <button className="button">Sample button</button>
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
