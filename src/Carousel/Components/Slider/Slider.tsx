import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/Hooks';
import { sliderNavigate } from '../../../Store/Slices/CarouselSlice';
import { ISlide } from '../../Interfaces/Slide';
import './Slider.scss';

export default function Slider() {
  const carouselData:ISlide[] = useAppSelector((state) => state.carousel.data);
  const dispatch = useAppDispatch();

  return (
    <span className="slider-wrapper">
      {
        carouselData.map((prop, index) => 
          <span title={`${prop.id}`} className="slider" key={`${prop.id}`}>
            { carouselData.length < 5 || (index === 0 || index === carouselData.length - 1) ? 
              <svg width="45" height="12" xmlns="http://www.w3.org/2000/svg" xlinkTitle={`${prop.id}`} onClick={() => dispatch(sliderNavigate(index))}>
                <path 
                  d="m7.93038,1.30864l29.13925,0l0,0c3.81732,0 6.91187,2.10039 6.91187,4.69136c0,2.59097 -3.09455,4.69136 -6.91187,4.69136l-29.13925,0l0,0c-3.81732,0 -6.91187,-2.10039 -6.91187,-4.69136c0,-2.59097 3.09455,-4.69136 6.91187,-4.69136z"
                  fill="white"
                  fillOpacity={prop.selected ? 1 : 0.6}
                /> 
              </svg>
              :
              <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg" xlinkTitle={`${prop.id}`} onClick={() => dispatch(sliderNavigate(index))}>
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
