import { createContext, useState } from "react";

export const CalcContext = createContext([]);

export function CalcProvider({ children }) {
    const [value, setValue] = useState(0);

    function changeValue(newValue) {
        setValue(newValue);
    }

    function clean() {
        setValue(0);
    }

    function operation(operator) {
        alert(operator);
    }

    return (
        <CalcContext.Provider value={{ value, changeValue, operation }}>
            {children}
        </CalcContext.Provider>
    );
}