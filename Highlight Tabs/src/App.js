import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Tab from './components/Tab';

const App = () => {
    return (
        <Router>
            <div className="app">
                <div className="browser">
                    <div className="tabs">
                        <Tab><NavLink exact to="/">Home</NavLink></Tab>
                        <Tab><NavLink to="/about">About</NavLink></Tab>
                        <Tab><NavLink to="/features">Features</NavLink></Tab>
                    </div>

                    <div className="viewport">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/features">
                                <Features />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
