import React from 'react'

function Student({ student }) {
  const { name, age } = student

  return (
    <div>
      <h2>Student Profile</h2>
      <p>Student: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Student
