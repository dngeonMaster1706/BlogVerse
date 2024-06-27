import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";


export default function Header() {
  return (
    <nav>
        <div className='container nav-container'>
            <Link className="nav-logo" to={'/'}>
                <h3>BlogV<span>ers</span>e</h3>
            </Link>

            <ul className="nav-menu">
                <li><Link to={'/profile/id'}>Profile</Link></li>
                <li><Link to={'/create'}>Create Blogs</Link></li>
                <li><Link to={'/authors'}>Authors</Link></li>
                <li><Link to={'/logout'}>Logout</Link></li>
            </ul>

            <button className="nav-toggle-button">
                <FaBars />
                <IoCloseSharp />
            </button>
        </div>
    </nav>
  )
}
