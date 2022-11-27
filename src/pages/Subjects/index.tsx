import * as React from 'react';
import  {Link} from "react-router-dom"

export function Subjects() {
  return (
    <>
    <h1>Subjects</h1>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <button><Link to="/dashboard/overview">Overview</Link></button>
      <button><Link to="/dashboard/material">Material</Link></button>
    </>
  )
}