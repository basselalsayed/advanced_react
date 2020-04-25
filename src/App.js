import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  state = {
    persons: [
      { name: 'Tom', age: 28 },
      { name: 'Dick', age: 25 },
      { name: 'Harry', age: 22 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked')
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
        <Person name='Dick' age='25'>My Hobbies: Racing</Person>
      </div>
    );
  }
}
