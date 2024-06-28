import { Link } from "react-router-dom"

const DeletePost = () => {
  return (
    <section>
    <div className='error-center'>
    <h1>Deleted</h1>
    <Link to={'/'} className="btn btn-primary">Go Back to Home</Link>
  </div>
  </section>
  )
}

export default DeletePost
