import React from "react";
import { ISlide } from "../../Interfaces/Slide";
import './Slide.scss';

export default function Slide(props:ISlide | any) {
    const { children } = props;
    return (
        <div className="container" style={{display: props.selected ? 'block' : 'none'}}>
            <div className="content">
                {children}
            </div>
            <div className="background">
                <img src={props.url} alt="Banner" className="background-image" />
            </div>
        </div>
    );
}