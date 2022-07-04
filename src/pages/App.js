import '../App.css';
import React, { createContext, useState } from 'react';
import Dropdown2 from '../components/Dropdown';
import NavbarMenu from '../components/Navbar';

import { Navbar, ToggleButton } from 'react-bootstrap';
import ParametersCanvas from '../components/Offcanvas';
import Sidebar from '../components/Sidebar';

export const ThemeContext = createContext(null);

function App() {
    // Dark-mode implementation
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    // Return value this is a test
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <h1 className="supertitre">Welcome to our IDE !</h1>
                <p>
                    <Sidebar />
                </p>
                <div>
                    <ToggleButton onClick={toggleTheme}>
                        Change Mode
                    </ToggleButton>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
