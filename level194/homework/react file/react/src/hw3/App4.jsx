import React from 'react'
import StudentList from './StudentList'

function App4() {
  const students = [
    {
      id: 1,
      name: "Giorgi",
      age: 18,
      grade: 90
    },
    {
      id: 2,
      name: "Nino",
      age: 19,
      grade: 85
    },
    {
      id: 3,
      name: "Luka",
      age: 18,
      grade: 95
    }
  ]

  return (
    <>
      <StudentList students={students} />
    </>
  )
}

export default App4
