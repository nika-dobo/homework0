import React from 'react'

function UserCard({ name, age, city }) {
  return (
    <div >
      <h2>
        User Information
      </h2>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    </div>
  )
}

export default UserCard