import * as React from 'react';
import  {Link} from "react-router-dom"

export function Material() {
  return (
    <>
    <h1>Material</h1>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <button><Link to="/dashboard/overview">Overview</Link></button>
      <button><Link to="/dashboard/subjects">Subjects</Link></button>
    </>
  )
}