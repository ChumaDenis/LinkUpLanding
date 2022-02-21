import React from 'react';

import "./Styles/input.css"
export default function Input(props) {
    return (
         <div className="form-item">
             <input type="text" className="form-input" required/>
            <label className="form-label">{props.name}</label>
         </div>
    );
}
