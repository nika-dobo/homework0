import React from 'react'
import User from './User'

function App() {
  const name = "nika";
  const role = "admin";

  return (
    <div>
      <User name={name} role={role} />
    </div>
  )
}

export default App
