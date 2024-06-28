import React from 'react'
import { Link } from 'react-router-dom'
export default function Logout() {
  return (
    <section>
    <div className='error-center'>
    <h1>Logged Out</h1>
    <Link to={'/'} className="btn btn-primary">Go Back to Home</Link>
  </div>
  </section>
  )
}

