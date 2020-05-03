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
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}
