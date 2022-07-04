import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Header from './components/Header';
import Params from './pages/Parameters';
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';
import Dropdown2 from './components/Dropdown';
import ParametersCanvas from './components/Offcanvas';
import NavbarMenu from './components/Navbar';

import './styles/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
