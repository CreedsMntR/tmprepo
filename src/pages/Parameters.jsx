import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const Params = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}
        ></ThemeContext.Provider>
    );
};

export default Params;
