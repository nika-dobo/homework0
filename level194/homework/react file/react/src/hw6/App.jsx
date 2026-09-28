import React from 'react'
import Profile from './Profile'

function App() {
  const name = "Giorgi";
  const profession = "Frontend Developer";
  const city = "Tbilisi";

  return (
    <div>
      <Profile name={name} profession={profession} city={city} />
    </div>
  )
}

export default App
