import { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const [userData,setUserData]=useState({

    email:'',
    password:'',

  })

  const changeInputHandle=(e)=>{
    setUserData(prevState=>{
      return{...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className='Login'>
          <div className='container register-container form-container'>
            <h2>Login</h2>
            <form action="" className='form register-form'>
              <p className='form-message'>Password or email invalid!</p>
              <input type="email" placeholder="Email" name="email" value={userData.email} onChange={changeInputHandle}/>
              <input type="password" placeholder="Password" name="password" value={userData.password} onChange={changeInputHandle}/>
              <button type='submit' className='btn btn-primary'>Login</button>
            </form>

            <small>
            Don't have any acount?
            <Link to={'/register'}>
                Register
            </Link>
            </small>
          </div>
        </section>
  )
}

export default Login
