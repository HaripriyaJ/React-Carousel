import React from "react";

export default function Slide(props:any) {
    const { children } = props;
    return (
        <div className="content">
            <div className="background">
                {children}
            </div>
        </div>
    );
}