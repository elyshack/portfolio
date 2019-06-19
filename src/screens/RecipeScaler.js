import React, { Component} from 'react';
import '../App.css';
import Heading from '../components/Heading.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class RecipeScaler extends React.Component {
  render() {
    return (
      <div className="App">
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
export default RecipeScaler;
