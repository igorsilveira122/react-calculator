import React from 'react';
import "./Button.css";

const Button = ({size, value, bg}) => {
    return (
        <button className={`Button button-${size} button-${bg}`}>
            {value}
        </button>
    );
}
 
export default Button;