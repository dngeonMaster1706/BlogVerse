
import { Link } from 'react-router-dom'
import { HeadPost } from '../data/data'


export default function Headpost() {
  return (
    <article className="haed-post">

    {
        HeadPost.map(({ id,category,authorId,title,des,Image},index)=>{
            return(
                <div key={index} className='container head-post-container'>

                        <div className="post-content">
                            <Link to={`posts/${authorId}`}>
                                <h1>{title}</h1>
                            </Link>
                             <p>{des}</p>
                        </div>
                        <div className="post-image">
                            <img src={Image} alt="error"/>
                        </div>
                </div>
            )
        })
    }

    </article>
  )
}
