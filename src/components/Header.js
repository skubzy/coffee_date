// src/components/Header.js
import React from "react";
import logo from '../logo2.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="Coffee Dates logo" />
        <h1 className="header-title">Coffee Dates</h1>
        <p className="header-subtitle">Find the coziest coffee spot — and someone to share it with!</p>
      </div>
    </header>
  );
}

export default Header;
