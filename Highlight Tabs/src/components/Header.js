import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';


const Header = () => {
    return (
        <div className="tabs">
            <Tab><NavLink exact to="/">Home</NavLink></Tab>
            <Tab><NavLink to="/about">About</NavLink></Tab>
            <Tab><NavLink to="/features">Features</NavLink></Tab>
        </div>
    );
};

export default Header;
