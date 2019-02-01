import React, { Component} from 'react';
import inner_pi from './components/images/inner_pi.png';
import { Button } from 'react-bootstrap/Button';
import { ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
import { Container } from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3><code>
            Elyse Shackleton Code Portfolio
            </code></h3>
          <hr width="75%"/>
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
          <img src={inner_pi} className="App-logo" alt="logo"/>
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
