import React from 'react';
import "./container.css"
export default function Container(props) {
    return (
        <container className={props.className}>
            <p className="number">{props.number}</p>
            <p className="headerText">{props.header}</p>
            <p className="text">{props.text}</p>
        </container>
    );
}
