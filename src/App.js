import inner_pi from './components/images/inner_pi.png';
import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import agent_file from './media/Elyse_Shackleton_Resume_June_2018.pdf';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeScaler from './screens/RecipeScaler.js';
import Home from './screens/Home.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/* <Heading /> */}

          <Router>
          <div>
          <view width="98vw">
          <code>
          <h3 className="Title">Elyse Shackleton Code Portfolio </h3>
          <div className="Button-bar">
              <Button href="https://elyshack.github.io/portfolio" variant="outline-primary">
                <Link className="link" to="/"> Home </Link>
                </Button>
                  <DropdownButton variant="outline-primary" as={ButtonGroup} title="Projects" id="bg-nested-dropdown">
                      <Dropdown.Item eventKey="1" href="https://elyshack.github.io/testpage"
                          target="_blank"
                          rel="noopener noreferrer">Html test page</Dropdown.Item>
                         <Dropdown.Item eventKey="2"> <Link className="sublink" to="/recipe">Recipe Scaler</Link> </Dropdown.Item>
                         <Dropdown.Item eventKey="3">Album</Dropdown.Item>
                  </DropdownButton>

              <Button href={agent_file} variant="outline-primary" download="Elyse_Shackleton_Resume_June_2018.pdf">Resume</Button>
          </div>        
          </code>
          </view>
          <div>
          <hr className="Line-break"/>
          </div>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/recipe" component={RecipeScaler} />

        </Router>

      </header>
      </div>
          
    );
  }
}



export default App;
