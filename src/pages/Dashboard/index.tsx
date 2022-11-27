import { Link } from "react-router-dom"

export function Dashboard() {
  return (
    <>
    <h1>Dashboard</h1>
      <button><Link to="/dashboard/subjects">Subjects</Link></button>
      <button><Link to="/dashboard/overview">Overview</Link></button>
      <button><Link to="/dashboard/material">Material</Link></button>
      <button><Link to="/profile">Profile</Link></button>
      <button><Link to="/settings">Settings</Link></button>
    </>
  )
}