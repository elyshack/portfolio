import inner_pi from '../components/images/inner_pi.png';
import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import firebase from '../firebase.js';

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
      </div>
      
      );
    }
  }
  export default Home;