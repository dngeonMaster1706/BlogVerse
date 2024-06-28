import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


export default function Header() {
    const [isNaveShow ,setIsNavShow]=useState(window.innerWidth>1024 ? true : false);

    const closeHavHandler=()=>{
        if(window.innerWidth<1024){
            setIsNavShow(false)
        }else{
            setIsNavShow(true)
        }
    }
  return (
    <nav>
        <div className='container nav-container'>
            <Link className="nav-logo" to={'/'} onClick={closeHavHandler}>
                <h3>Blog<span>Verse</span></h3>
            </Link>

            { isNaveShow &&<ul className="nav-menu">
                <li><Link to={'/profile/id'} onClick={closeHavHandler}>Profile</Link></li>
                <li><Link to={'/create'} onClick={closeHavHandler}>Create Blogs</Link></li>
                <li><Link to={'/authors'} onClick={closeHavHandler}>Authors</Link></li>
                <li><Link to={'/logout'} onClick={closeHavHandler}>Logout</Link></li>
            </ul>
            }
            <button className="nav-toggle-button" onClick={()=>setIsNavShow(!isNaveShow)}>
                
                {
                    isNaveShow ?<FaBars/> :<AiOutlineClose/>
                }
                
            </button>
        </div>
    </nav>
  )
}
