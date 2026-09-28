import React from 'react'

function StudentCard({ name, age, grade }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  )
}

export default StudentCard
