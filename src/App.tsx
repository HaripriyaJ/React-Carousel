import React from 'react';
import './App.scss';
import Carousel from './Carousel/Carousel';
import Content from './Carousel/Components/Content/Content';
import Slide from './Carousel/Components/Slide/Slide';

function App() {
  return (
    <Carousel>
      {
        [1, 2, 3].map(_ => 
          <Slide>
            <Content>Sample Content</Content>
          </Slide>
        )
      }
    </Carousel>
  );
}

export default App;
