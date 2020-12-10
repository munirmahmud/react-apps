import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

const App = () => {
    const [markdown, setMarkdown] = useState('# sup');

    const handleChange = e => {
        setMarkdown(e.target.value);    
    };

    return (
        <div className="app">
            <textarea value={markdown} onChange={handleChange} />

            <ReactMarkdown children={markdown}  className="preview" />
        </div>
    );
};

export default App;
