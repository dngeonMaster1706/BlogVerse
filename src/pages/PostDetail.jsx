import PostAuthor from "../components/PostAuthor"
import { Link } from "react-router-dom"
import postDtailImage from "../assets/1.jpg"

const PostDetail = () => {
  return (
    <section>
      <div className="container PostDtail-container">
        <div className="postdtail-top">
          <PostAuthor/>
          
            <div className="post-dtail-buttons">
              <Link to={'/posts/werwer/edit'} className="btn btn-sm btn-primary">
                Edit
              </Link>
              <Link to={'/posts/werwer/delete'} className="btn btn-sm btn-danger">
                Delete
              </Link>
            </div>

  
        </div>
        <h1>Loreemndbhjbwchjdqwbs hbgdhjwbvcqdjx sw</h1>
        <div className="postdtail-image">
          <img src={postDtailImage}/>
        </div>
        <div className="postdtail-para">
        <p>
        In recent years, robotics has become a pivotal tool in modern education, transforming the way students learn and interact with technology. By integrating robotics into the curriculum, educators can provide hands-on learning experiences that foster creativity, problem-solving skills, and critical thinking. Robotics programs in schools allow students to build and program their own robots, giving them a practical understanding of engineering and computer science principles.

        Moreover, robotics competitions and clubs are gaining popularity, offering students opportunities to collaborate, innovate, and apply their knowledge in real-world scenarios. These activities not only make learning more engaging but also prepare students for future careers in STEM fields. As technology continues to advance, the role of robotics in education is expected to grow, equipping the next generation with the skills needed to thrive in a technology-driven world.
        </p>
        <p>
        In recent years, robotics has become a pivotal tool in modern education, transforming the way students learn and interact with technology. By integrating robotics into the curriculum, educators can provide hands-on learning experiences that foster creativity, problem-solving skills, and critical thinking. Robotics programs in schools allow students to build and program their own robots, giving them a practical understanding of engineering and computer science principles.

        Moreover, robotics competitions and clubs are gaining popularity, offering students opportunities to collaborate, innovate, and apply their knowledge in real-world scenarios. These activities not only make learning more engaging but also prepare students for future careers in STEM fields. As technology continues to advance, the role of robotics in education is expected to grow, equipping the next generation with the skills needed to thrive in a technology-driven world.
        </p>
        <p>
        In recent years, robotics has become a pivotal tool in modern education, transforming the way students learn and interact with technology. By integrating robotics into the curriculum, educators can provide hands-on learning experiences that foster creativity, problem-solving skills, and critical thinking. Robotics programs in schools allow students to build and program their own robots, giving them a practical understanding of engineering and computer science principles.

        Moreover, robotics competitions and clubs are gaining popularity, offering students opportunities to collaborate, innovate, and apply their knowledge in real-world scenarios. These activities not only make learning more engaging but also prepare students for future careers in STEM fields. As technology continues to advance, the role of robotics in education is expected to grow, equipping the next generation with the skills needed to thrive in a technology-driven world.
        </p>
        </div>
      </div>
    </section>
  )
}

export default PostDetail
