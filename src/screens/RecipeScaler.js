import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import agent_file from '../media/Elyse_Shackleton_Resume_June_2018.pdf';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App.js';


class RecipeScaler extends React.Component {

state = {ingredients: [], scalingToggle: false, display: 'WIP', tempDisplay: ''};


handleChange = (event) => {
  this.setState({tempDisplay: event.target.value});
}

handleClick = () => {
  this.setState({display: this.state.tempDisplay})
}

  render() {
    return (
      <div className="recipewrapper">
        <label> Recipe Scaler </label>
        <br/>
        <label> {this.state.display} </label>
        <br/>
        <input type="text" onChange={this.handleChange.bind(this)}></input> <input></input>
        <br/>
        <input></input> <input></input>
        <br/>
        <input></input> <input></input>
        <br/>
        <input></input> <input></input>
        <br/>
        <input></input> <input></input>
        <br/>
        <input></input> <input></input>
        <br/>
        <br/>
        <Button onClick={this.handleClick}>Finalize!</Button>
      </div>
    );
  }
}
export default RecipeScaler;
