import inner_pi from '../components/images/inner_pi.png';
import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import firebase from '../firebase.js';

class Home extends React.Component {

  state = {number: 0}

  testClick = () => {
    this.setState({number: Math.floor(Math.random() * Math.floor(101))});
    console.log("HELLO");
  }



    // RANDOM STUDENT VALUE GENERATOR
    handleClick = async () => {
      this.setState({number: "yeet"});

      var keyArray = [];
      var dataArray =[];
      try{
        // Create Query
        var studentsQuery = firebase.database().ref('students').orderByKey();
        // Call query and loop through all fetched values
         await studentsQuery.once("value").then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                keyArray.push(key);
                dataArray.push(childData);
            });
        });
      } catch(err){
        this.setState({number: err});
          console.log(err);
      }

      // Build out object of random numbers corresponding with keys, then update
      var obj = {};
      for (var i=0; i < dataArray.length; i++){
        var randomVal = Math.floor(Math.random() * Math.floor(101));
        obj[keyArray[i]] = randomVal;
      }

      await firebase.database().ref('students/').update(obj);

    }




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
      <div/>
      <Button onClick={this.handleClick}>Randomize!</Button>
      <div/>
      <label>{this.state.number}</label>
      </div>
      
      );
    }
  }
  export default Home;