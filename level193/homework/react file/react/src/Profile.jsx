import React from 'react'
import UserInfo from './UserInfo'
import UserStatus from './UserStatus'

function Profile() {
  return (
    <div>
        <h1>User Profile</h1>
        <br />
        <UserInfo />
        <br />
        <UserStatus />
    </div>
  )
}

export default Profile