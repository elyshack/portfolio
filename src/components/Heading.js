import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Heading extends React.Component {
    render() {
      return (
        <div>
        <view width="98vw">
        <code>
        <h3 className="Title">Elyse Shackleton Code Portfolio </h3>
        <div className="Button-bar">
            <Button href="https://elyshack.github.io/portfolio" variant="outline-primary">Home  </Button>
                <DropdownButton variant="outline-primary" as={ButtonGroup} title="Projects" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1" href="https://elyshack.github.io/testpage"
            target="_blank"
            rel="noopener noreferrer">Html test page</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Album</Dropdown.Item>
                </DropdownButton>
            <Button href="/media/Elyse_Shackleton_Resume_June_2018.pdf" variant="outline-primary" download>Resume </Button>
        </div>        
        </code>
        </view>
        <div>
        <hr className="Line-break"/>
        </div>
        </div>
      );
    }
} export default Heading;