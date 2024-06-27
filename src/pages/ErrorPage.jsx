import React from 'react'
import {Link} from "react-router-dom"
const ErrorPage = () => {
  return (
    <section>
      <div className='error-center'>
      <h2>404</h2>
      <h3>Page Not Found !</h3>
      <Link to={'/'} className="btn btn-primary">Go Back to Home</Link>
    </div>
    </section>
  )
}

export default ErrorPage
