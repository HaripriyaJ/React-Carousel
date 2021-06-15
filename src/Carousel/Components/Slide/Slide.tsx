import React from "react";
import Content from "../Content/Content";
import './Slide.scss';

export default function Slide(props:any) {
    const { children } = props;
    return (
        <div className="container">
            <div className="content">
                <Content>Slide content</Content>
            </div>
            <div className="background">
                <img src="Assets/img-1.jpg" alt="Image" className="background-image" />
            </div>
        </div>
    );
}