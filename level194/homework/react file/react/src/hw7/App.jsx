import React from 'react'
import Card from './Card'

function App() {
  const title = "React";
  const description = "JavaScript library for building user interfaces";
  const buttonText = "Learn More";

  return (
    <div>
      <Card title={title} description={description} buttonText={buttonText} />
    </div>
  )
}

export default App
