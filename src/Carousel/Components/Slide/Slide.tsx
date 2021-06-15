import React from "react";
import './Slide.scss';

export default function Slide(props:any) {
    const { children } = props;
    return (
        <div className="container">
            <div className="content">
                {children}
            </div>
            <div className="background">
                <img src="Assets/img-1.jpg" alt="Banner" className="background-image" />
            </div>
        </div>
    );
}