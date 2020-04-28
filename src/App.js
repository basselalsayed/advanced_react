import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

export default class App extends Component {
  state = {
    persons: [
      { name: 'Tom', age: 28 },
      { name: 'Dick', age: 25 },
      { name: 'Harry', age: 22 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Dick', age: 25 },
        { name: 'James', age: 25 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tom', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'James', age: 25 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'Bas!!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
