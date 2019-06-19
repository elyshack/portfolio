import React, { Component} from 'react';
import inner_pi from './components/images/inner_pi.png';
import './App.css';
import Heading from './components/Heading.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Heading />
          <p>Follow @ <a 
            className="App-link"
            href="https://twitter.com/elyseshackleton"
            target="_blank"
            rel="noopener noreferrer"
          >
          Twitter</a>,  <a 
            className="App-link"
            href="https://instagram.com/elyshack"
            target="_blank"
            rel="noopener noreferrer"
          >
          Instagram
          </a>
          </p>
          <div>
          <img flex="1"
          src={inner_pi} className="App-logo" alt="logo"/>
          </div>
          <p>
            <highlight>Fight me irl</highlight>
          </p>
          {/* <Container>
            <ButtonToolbar>
              <Button varient="primary">No Fight</Button>
              <Button varient="warning">Yoinks</Button>
            </ButtonToolbar> 
          </Container> */}
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
