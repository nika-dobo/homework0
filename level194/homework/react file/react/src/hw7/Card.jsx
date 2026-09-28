import React from 'react'

function Card({ title, description, buttonText }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  )
}

export default Card
