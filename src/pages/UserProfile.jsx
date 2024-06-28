import { Link } from "react-router-dom"
import PfofileImage from "../assets/a8.jpg"
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const UserProfile = () => {
  

  const [ProfileImage,setProfileImage]=useState('')
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [currentPassword,setCuurrentPassword]=useState()
  const [newPassword,setNewPassword]=useState()
  const [confirmNewPassword,setConfirmNewPassword]=useState()

  return (
    <section className='profile'>
      <div className="container  profile-container">
        <Link to={'/myposts/id'}>
          My posts
        </Link>
        <div className="profile-details form-container">
          <div className="profile-wrapper">
            <div className="profile-image">
                <img src={PfofileImage}alt=""/>
            </div>
            {/* fORM */}
              <form className="profile-image-form">
                  <input type="file" name="profile-image" id="profile-image" accept="png,jpg,jpeg" onChange={e=>setProfileImage(e.target.files[0])}/>
              
                  {/* <label htmlFor="profile-image">
                    <FaEdit />
                  </label> */}
              </form>
              <button className="profile-image-button">
              <FaCheckCircle />
              </button>
          </div>
              <h2>
                Dummy User
              </h2>

              {/* Profile form data */}
              <form action="" className='form profile-data-form'>
              <p className='form-message'>Password or email invalid!</p>
              <input type="text" placeholder="Enter your Name" name="name" value={name}  onChange={e=>setName(e.target.value)}/>
              <input type="email" placeholder="Enter Email" name="email" value={email}  onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Enter Current Password" name="currentPassword" value={currentPassword} onChange={e=>setCuurrentPassword(e.target.value)}/>
              <input type="password" placeholder="Enter New Password" name="newPassword" value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
              <input type="password" placeholder="Confirm New Password" name="confirmNewPassword" value={confirmNewPassword}  onChange={e=>setConfirmNewPassword(e.target.value)}/>
              <button type='submit' className='btn btn-primary'>Update Profile</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
