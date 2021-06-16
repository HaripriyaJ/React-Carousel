import React from "react";
import './Content.scss';

export const addHeading = (content: string | undefined) => {
    return content ? <p className="heading">{content}</p> : null;
}

export const addBody = (content: string | undefined) => {
    return content ? <p className="body">{content}</p>: null;
}

export const addButton = (buttonType: string | undefined, buttonText: string | undefined, buttonUrl?:string) => {
    return (
        buttonType && buttonText ?
        (<button 
            className={`button button-${buttonType || 'primary'}`} 
            onClick={() => window.location.replace(buttonUrl || '/')}
        >
            {buttonText}
        </button>)
        : null
    );
}

export default function Content(props:any) {
    const { children } = props;
    return children;
}