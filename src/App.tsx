import React from 'react';
import './App.scss';
import Carousel from './Carousel/Carousel';
import Arrow from './Carousel/Components/Arrows/Arrow';
import Content from './Carousel/Components/Content/Content';
import Slide from './Carousel/Components/Slide/Slide';
import Slider from './Carousel/Components/Slider/Slider';
import { ISlide } from './Carousel/Interfaces/Slide';
import { useAppSelector } from './Store/Hooks';

function App() {
  const carouselData:ISlide[] = useAppSelector((state) => state.carousel.data);
  
  return (
    <div>
      <div className="carousel">
        <Carousel>
          <Arrow side="left" />
          <Arrow side="right" />
          {
            carouselData.map(slide => 
              <Slide url={slide.url} key={slide.id} selected={!!slide?.selected}>
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
