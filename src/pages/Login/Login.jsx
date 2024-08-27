import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
      <img src={Logo} />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type='text' className='sign-up-name' placeholder='Your name' />
          <input type='email' className='sign-up-name' placeholder='email' />
          <input type='password' className='sign-up-name' placeholder='password' />
          <input type='text' className='sign-up-name' placeholder='Your name' />
          <div className="form-help">
            <div className='rember-mef'>
              <input type="checkbox" />
              <label htmlFor=''>Remember me</label>
            </div>
            <p>Need Help</p>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login