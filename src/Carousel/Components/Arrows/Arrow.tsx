import React from "react";
import { IArrow } from "../../Interfaces/Arrow";
import './Arrow.scss';

export default function Arrow(props:IArrow) {
    return (
        <span className={props.side === 'left' ? 'arrow arrow-pos-left' : 'arrow arrow-pos-right'} onClick={() => alert("Clicked")} title={props.side === 'left' ? 'Previous' : 'Next'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 24 24" id="arrow" className={props.side === 'left' ? 'left-arrow': 'right-arrow'}>
                <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" fill={props.fill || "white"} fillOpacity="0.5" />
            </svg>
        </span>
    );
}