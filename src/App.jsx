import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      McPadden:{
        firstname: "Sean",
        lastname: "Mcpadden",
        age: "26",
        wins: 3,
        losses: 1
      },
      Stebbins:{
        firstname: "Sean",
        lastname: "Stebbins",
        age: "29",
        wins: 2,
        losses: 1
      },
      Huntley:{
        firstname: "Jason",
        lastname: "Huntley",
        age: "43",
        wins: 5,
        losses: 7
      },
    }
  }
// must have render method AND return statement must be inside render method
  render(){
    return (

    <div className="d-flex justify-content-around">
      {/* PersonCard is a component */}
      {/* text within PersonCard represent children */}
      <PersonCard 
        person = {this.state.McPadden}
      />
      <PersonCard
        person = {this.state.Stebbins}
      />
      <PersonCard
        person = {this.state.Huntley}
      />
    </div>
    );
  }
}


