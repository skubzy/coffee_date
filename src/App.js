import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Coffee Dates">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Testing to work.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
