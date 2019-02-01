import React, { Component } from 'react';
import logo from './logo.svg';
import inner_pi from './components/inner_pi.png';
import blankclock from './components/blankclock.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This is the code portfolio of <code>Elyse Shackleton</code></p>
          <p>Follow @ <a 
            className="App-link"
            href="https://twitter.com/elyseshackleton"
            target="_blank"
            rel="noopener noreferrer"
          >
          Twitter
          </a> 
          </p>
          <p>
            @ <a 
            className="App-link"
            href="https://instagram.com/elyshack"
            target="_blank"
            rel="noopener noreferrer"
          >
          Instagram
          </a>
          </p>
          <img src={inner_pi} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://elyshack.github.io/testpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Html test page
          </a>
        </header>
      </div>
    );
  }
}



export default App;
