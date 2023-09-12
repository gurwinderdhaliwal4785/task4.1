import React from 'react';
import './App.css';

function NavigationBar() {
    return (
        <div className="topnav">
            <div className="logo"><img src={require("./Images/Logo.png")} alt="logo" width={150} height={50} /></div>
            {/* <a href="#news">Find DEV</a> */}
            <a href="#contact">Find Jobs</a>
            <a href="#about">Sign In</a>
            <a href="#account">Create Account</a>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </div>
    );
}

export default NavigationBar;
