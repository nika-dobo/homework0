import React from 'react'

function Student({ name, grade }) {
  return (
    <div>
      <p>Student: {name}</p>
      <p>Grade: {grade}</p>
      <p>Result: {grade >= 50 ? 'Passed' : 'Failed'}</p>
    </div>
  )
}

export default Student
