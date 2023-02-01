import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='Login'>
        <span className="LoginTitle">Login</span>
        <form action="" className="LoginForm">
            
            <div className="in">
            <label>Email</label>
            <br/>
            <input type="email" placeholder='Enter your Email' className='LoginInput'></input>

            </div>

            <div className="in">
            <label>Password</label>
            <br/>
            <input type="password" placeholder='Enter your Password' className='LoginInput'></input>

            </div>
            
            <button className='RegisterButton'>Login</button>
        
        </form>

        <button className='LoginButton'>Register</button>
    </div>
  )
}
