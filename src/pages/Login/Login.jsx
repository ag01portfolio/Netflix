import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'

function Login() {
  const [signState, setSignState] = useState('Sign In')
  const isLoggedIn = signState === 'Sign In'
  return (
    <div className='login'>
      <img src={Logo} className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {!isLoggedIn && <input type='text' className='sign-up-name' placeholder='Your name' />}
          <input type='email' className='sign-up-name' placeholder='email' />
          <input type='password' className='sign-up-name' placeholder='password' />
          <button >{signState}</button>
          <div className="form-help">
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor=''>Remember me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {isLoggedIn ? <p>New to Netflix<span onClick={() => { setSignState("Sign up") }}>Sing up now</span></p>
            : <p>Already have Account<span onClick={() => { setSignState("Sign In") }}>Sing in now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login