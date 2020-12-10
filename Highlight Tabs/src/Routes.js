import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Features from './pages/Features';
import Home from './pages/Home';

const Routes = () => {
    return (
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
    );
};

export default Routes;
