import React from 'react'

function Profile({ name, profession, city }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Profession: {profession}</p>
      <p>City: {city}</p>
    </div>
  )
}

export default Profile
