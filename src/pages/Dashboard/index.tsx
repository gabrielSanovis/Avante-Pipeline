import { Link } from "react-router-dom"

import { NavMobile } from "../../components/NavMobile";

export function Dashboard() {
  return (
    <>
    <NavMobile />
    <h1>Dashboard</h1>
      <button><Link to="/dashboard/subjects">Subjects</Link></button>
      <button><Link to="/dashboard/overview">Overview</Link></button>
      <button><Link to="/dashboard/material">Material</Link></button>
      <button><Link to="/profile">Profile</Link></button>
      <button><Link to="/settings">Settings</Link></button>
    </>
  )
}