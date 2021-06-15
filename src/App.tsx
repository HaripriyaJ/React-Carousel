import React from 'react';
import './App.scss';
import Carousel from './Carousel/Carousel';
import Arrow from './Carousel/Components/Arrows/Arrow';
import Content from './Carousel/Components/Content/Content';
import Slide from './Carousel/Components/Slide/Slide';

function App() {
  return (
    <div>
      <Arrow side="right"/>
      <Carousel>
        {
          [1, 2, 3].map(_ => 
            <Slide>
              <Content>Sample Content</Content>
            </Slide>
          )
        }
      </Carousel>
      <Arrow side="left"/>
    </div>
  );
}

export default App;
