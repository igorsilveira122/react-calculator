import { createContext, useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";

export const CalcContext = createContext([]);

export function CalcProvider({ children }) {
    const [value, setValue] = useState('0');

    function changeValue(newValue) {
        if (value.includes('/') || value.includes('+') || value.includes('-') || value.includes('*')) {
            setValue(value + newValue);
        }
        else {
            if (value != '0' && value.length >= 1) {
                setValue(value + newValue);
            }

            else 
                setValue(newValue + '');
        }
    }

    function clean() {
        setValue('0');
    }


    function calc() {
        let parts = value.split('+')
        setValue (parseInt(parts[0]) + parseInt(parts[1]) + '');
    }

    function operation(operator) {
        if (operator == 'AC') {
            clean();
        }
        else if (operator == '=') {
            calc()
        }

        else {
            setValue(value + operator);
        }
    }



    return (
        <CalcContext.Provider value={{ value, changeValue, operation }}>
            {children}
        </CalcContext.Provider>
    );
    }