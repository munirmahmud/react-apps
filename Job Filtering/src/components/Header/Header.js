import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header bg-teal-500 mb-12 relative">
            <img src="/images/bg-header-desktop.svg" alt="Job Board Header"/>
            <h1 className="absolute text-4xl font-bold">Job Board</h1>
        </header>
    )
}

export default Header;
