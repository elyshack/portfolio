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
          <h3>This is the code portfolio of Elyse Shackleton</h3>
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
          <img src={inner_pi} className="App-logo" alt="logo"/>
          <p>
            <highlight>Fight me irl</highlight>
          </p>
          <a
            className="App-link"
            href="https://elyshack.github.io/testpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Page Link
          </a>
        </header>
      </div>
    );
  }
}



export default App;
