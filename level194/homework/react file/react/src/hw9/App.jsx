import React from 'react'
import Person from './Person'

function App() {
  const name = "Giorgi";
  const age = 20;

  return (
    <div>
      <Person name={name} age={age} />
    </div>
  )
}

export default App
