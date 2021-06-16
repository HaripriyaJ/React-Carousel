import React from 'react';
import { carouselData } from '../../Mock/Carousel';
import './Slider.scss';

export default function Slider() {
  return (
    <span className="slider-wrapper">
      {
        carouselData.map(prop => 
          <span title={`${prop.id}`} className="slider" key={`${prop.id}`}>
            { carouselData.length < 5 || (prop.id === 0 || prop.id === carouselData.length - 1) ? 
              <svg width="45" height="12" xmlns="http://www.w3.org/2000/svg" xlinkTitle={`${prop.id}`} onClick={() => alert("Clicked")}>
                <path 
                  d="m7.93038,1.30864l29.13925,0l0,0c3.81732,0 6.91187,2.10039 6.91187,4.69136c0,2.59097 -3.09455,4.69136 -6.91187,4.69136l-29.13925,0l0,0c-3.81732,0 -6.91187,-2.10039 -6.91187,-4.69136c0,-2.59097 3.09455,-4.69136 6.91187,-4.69136z"
                  fill="white"
                  fillOpacity={prop.selected ? 1 : 0.6}
                /> 
              </svg>
              :
              <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg" xlinkTitle={`${prop.id}`} onClick={() => alert("Clicked")}>
                <ellipse ry="4.66667" rx="4.83333" cy="6" cx="6.5" fill="white"
                  fillOpacity={prop.selected ? 1 : 0.6} />
              </svg>
            }
          </span>
        )
      }
    </span>
  );
}
