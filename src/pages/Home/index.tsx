import * as React from 'react';
import { Link } from "react-router-dom"

export function Home() {
  return (
    <>
      <button><Link to="/auth">rota auth</Link></button>
      <button><Link to="/auth/sign-up">sign-up</Link></button>
    </>

  )
}