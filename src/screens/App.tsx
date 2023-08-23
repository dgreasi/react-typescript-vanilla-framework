import React from 'react';
import logo from '../styles/logo.svg';
import './App.css';
import APIProvider from '../api/APIProvider';
import { Posts } from '../components/Posts';

function App() {
  return (
    <APIProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Posts />
        </header>
      </div>
    </APIProvider>
  );
}

export default App;
