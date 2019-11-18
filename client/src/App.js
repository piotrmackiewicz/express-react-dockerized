import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [test, setTest] = useState('');

  fetch('http://localhost:5000/api/ping')
  .then(res => res.json())
  .then(result => {
    setTest(result)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{test}</h1>
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
