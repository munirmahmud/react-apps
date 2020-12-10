import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import JobLists from './components/JobLists';

const App = () => {
    return (
        <div className="bg-teal-100">
            <Header />

            <div className="container m-auto">
                <JobLists />
            </div>
        </div>
    )
}

export default App;
