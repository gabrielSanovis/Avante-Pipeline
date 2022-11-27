import * as React from 'react';
import  {Link} from "react-router-dom"

export function Profile() {
  return (
    <>
    <h1>Settings</h1>
      <button><Link to="/profile/update-profile">Update Profile</Link></button>
      <button><Link to="/profile/update-password">Update Password</Link></button>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <button><Link to="/settings">Settings</Link></button>
    </>
  )
}