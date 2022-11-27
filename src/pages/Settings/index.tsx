import * as React from 'react';
import  {Link} from "react-router-dom"

export function Settings() {
  return (
    <>
    <h1>Settings</h1>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <button><Link to="/profile">Profile</Link></button>
    </>
  )
}