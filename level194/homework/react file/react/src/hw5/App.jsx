import React from 'react'
import Student from './Student'

function App() {
  const student = {
    name: "Nika",
    age: 18
  }

  return (
    <>
      <Student student={student} />
    </>
  )
}

export default App
