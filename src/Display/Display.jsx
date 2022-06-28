import React, { useContext } from 'react';
import { CalcContext } from '../providers/calc';
import "./Display.css";

const Display = () => {
    const {value} = useContext(CalcContext);
    
    return (
        <div className='Display'>{value}</div>
    );
}
 
export default Display;