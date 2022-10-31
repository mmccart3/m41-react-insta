import React from 'react';
import './App.css';
import Box from './components/box';
import {useState} from 'react';

function App() {
  const [user, setUser] = useState();
  const [age, setAge] = useState();

  return (
    <div className="App">
      <input onChange={(event) => setUser(event.target.value)}/>
      <input onChange={(event) => setAge(event.target.value)}/>
      {user ? <div>
        <h1>Harry Potter</h1>
      <Box name="George Weasley" age="17" />
      <Box name="Hermione Grainger" age="15" />
      <Box name="Rubeus Hagrid" age="47" />
      <Box name={user} age={age} />
      </div>
      :<div>
        <h1>This is the else part of the statement</h1>
        </div>}
    </div>
  );
}

export default App;
