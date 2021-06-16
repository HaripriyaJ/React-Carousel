import React from "react";
import { ISlide } from "../../Interfaces/Slide";
import './Slide.scss';

export default function Slide(props:ISlide | any) {
    const { children, data } = props;
    return (
        <div className="container" style={{display: data?.selected ? 'block' : 'none'}}>
            {data?.content ? <div className={`content content-${data?.contentSide || 'left'}`}> {children} </div> : null}
            <div className="background">
                <img src={data.url} alt="Banner" className="background-image" />
            </div>
        </div>
    );
}