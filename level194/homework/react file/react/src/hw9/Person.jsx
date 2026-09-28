import React from 'react'

function Person({ name, age }) {
  let status = "Minor"
  if (age >= 18) {
    status = "Adult";
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{status}</p>
    </div>
  )
}

export default Person
