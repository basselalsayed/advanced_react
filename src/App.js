import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({ 
    persons: [
      { name: 'Tom', age: 28 },
      { name: 'Dick', age: 25 },
      { name: 'Harry', age: 22 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Tom', age: 28 },
        { name: 'Dick', age: 25 },
        { name: 'James', age: 25 }
      ]
    });
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My Hobbies: Racing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}  />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  />
      <Person name='Dick' age='25'>My Hobbies: Racing</Person>
    </div>
  );
}

export default App;


// state = {
//   persons: [
//     { name: 'Tom', age: 28 },
//     { name: 'Dick', age: 25 },
//     { name: 'Harry', age: 22 }
//   ]
// }

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       { name: 'Tom', age: 28 },
//       { name: 'Dick', age: 25 },
//       { name: 'James', age: 25 }
//   ]})
// }