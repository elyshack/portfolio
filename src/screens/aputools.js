import inner_pi from '../components/images/inner_pi.png';
import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import firebase from '../firebase.js';

class ApuTools extends React.Component {

  state = {number: 0}

  testClick = () => {
    this.setState({number: Math.floor(Math.random() * Math.floor(101))});
    console.log(this.state.number);
  }



    // RANDOM STUDENT VALUE GENERATOR
    handleClick = async () => {
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

    funClick = async () => {
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
          await firebase.database().ref('students/').update(obj);
        }

      }


    render() {
      return (
      <div>
      <div/>
      <Button onClick={this.handleClick}>Efficient Randomize Database</Button>
      <div/>
      <Button onClick={this.funClick}>FUN Database Randomize!</Button>
      <div/>
      </div>
      
      );
    }
  }
  export default ApuTools;