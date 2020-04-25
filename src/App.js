import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name='Tom' age='28'  />
        <Person name='Dick' age='25'>My Hobbies: Racing</Person>
        <Person name='Harry' age='22'  />
      </div>
    );
  }
}
