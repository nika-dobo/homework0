import React from 'react'

function User({ name, role }) {
  const isAdmin = role === "admin";

  return (
    <div>
      <p>User: {name}</p>
      <p>Role: {isAdmin ? "Admin" : "User"}</p>
      <p>Access: {isAdmin ? "Full access" : "Limited access"}</p>
    </div>
  )
}

export default User
