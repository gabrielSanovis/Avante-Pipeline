import * as React from 'react';
import {Link} from "react-router-dom"

export function OverView() {
  return (
    <>
    <h1>Overview</h1>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <button><Link to="/dashboard/subjects">Subjects</Link></button>
      <button><Link to="/dashboard/material">Material</Link></button>
    </>
  )
}