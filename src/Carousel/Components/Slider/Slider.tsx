import React from 'react';
import './Slider.scss';

export default function Slider() {
  return (
    <span className="slider-wrapper">
      {
        [1, 2, 3].map((prop:any) => 
          <span title={prop.id} className="slider" key={prop.id}>
            {prop.start || prop.end ? 
              <svg width="45" height="12" xmlns="http://www.w3.org/2000/svg" xlinkTitle={prop.id} onClick={() => alert("Clicked")}>
                <path 
                  d="m7.93038,1.30864l29.13925,0l0,0c3.81732,0 6.91187,2.10039 6.91187,4.69136c0,2.59097 -3.09455,4.69136 -6.91187,4.69136l-29.13925,0l0,0c-3.81732,0 -6.91187,-2.10039 -6.91187,-4.69136c0,-2.59097 3.09455,-4.69136 6.91187,-4.69136z"
                  fill={prop.selected ? "#000000" : "transparent"}
                  stroke="#000000"
                /> 
              </svg>
              :
              <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg" xlinkTitle={prop.id} onClick={() => alert("Clicked")}>
                <ellipse ry="4.66667" rx="4.83333" cy="6" cx="6.5" stroke="#000000" fill={prop.selected ? "#000000" : "transparent"} />
              </svg>
            }
          </span>
        )
      }
    </span>
  );
}
