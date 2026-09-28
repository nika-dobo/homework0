import React from 'react'
import Student from './Student'

function App() {
  const name = "Nika";
  const grade = 85;

  return (
    <div>
      <Student name={name} grade={grade} />
    </div>
  )
}

export default App
