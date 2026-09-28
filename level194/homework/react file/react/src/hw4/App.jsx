import React from 'react'
import User from './User'

function App() {
  const name = "nika";
  const age = 18;

  return (
    <>
      <User name={name} age={age} />
    </>
  )
}

export default App
