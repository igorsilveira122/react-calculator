import React, { useContext } from 'react';
import { CalcContext } from '../providers/calc';
import "./Button.css";

const Button = ({size, value, bg, operator=false}) => {
    const {changeValue, operation} = useContext(CalcContext);


    return (
        <button
            className={`Button button-${size} button-${bg}`}
            onClick={operator ? () => operation(value) : () => changeValue(value)}
        >
            {value}
        </button>
    );
}
 
export default Button;