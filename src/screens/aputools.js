import inner_pi from '../components/images/inner_pi.png';
import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import firebase from '../firebase.js';
import { subscribe, Connector } from 'mqtt-react';


const MessageContainer = subscribe({topic: 'APUEDU/ECS/Research/IoT/2019'})();


class ApuTools extends React.Component {

  state = {number: 0, mqttMessage: 'Test Change'};

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
      <Connector mqttProps="broker.hivemq.com/">
      <div>
      <p>APU IoT Research Tools</p>
      <br/>
      <div/>
      <Button onClick={this.handleClick}>Batch Database Randomizer</Button>
      <br/>
      <Button onClick={this.funClick}>Sequential Database Randomizer</Button>
      <div/>
      <br/>
      <p>MQTT FEED: {this.state.mqttMessage}</p>
      </div>
      </Connector>
      );
    }
  }
  export default ApuTools;