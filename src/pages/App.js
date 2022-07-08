import '../App.css';
import '../styles/codemirror.css'

import React from 'react';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';


function App() {
    // Return value
    return (
            <>
            <div>
                <Sidebar />
            </div>
                <div>
                    <Editor />

                </div>
            </>
    );
}

export default App;
