import React from 'react';
import './App.css';
import Tab from './components/Tab';

const App = () => {
    

    return (
        <div className="app">
            <div className="browser">
                <div className="tabs">
                    <Tab><a>Home</a></Tab>
                    <Tab><a>About</a></Tab>
                    <Tab><a>Features</a></Tab>
                </div>

                <div className="viewport">Pages Go Here</div>
            </div>
        </div>
    );
};

export default App;