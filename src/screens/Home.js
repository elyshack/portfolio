import inner_pi from '../components/images/inner_pi.png';
import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import agent_file from '../media/Elyse_Shackleton_Resume_June_2018.pdf';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeScaler from '../screens/RecipeScaler.js';


class Home extends React.Component {
    render() {
      return (
        <div>
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
      <a
        className="App-link"
        href="https://elyshack.github.io/testpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        Test Page Link
      </a>
      </div>
      );
    }
  }
  export default Home;