import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='Register'>
        <span className="RegisterTitle">Register</span>
        <form action="" className="RegisterForm">
            
        <div className="in">
            <label>User Name</label>
            <br/>
            <input type="Text" placeholder='Enter your UserName' className='RegisterInput'></input>

            </div>

            <div className="in">
            <label>Email</label>
            <br/>
            <input type="email" placeholder='Enter your Email' className='RegisterInput'></input>

            </div>

            <div className="in">
            <label>Password</label>
            <br/>
            <input type="password" placeholder='Enter your Password' className='RegisterInput'></input>

            </div>
            
           
            <button className='RegisterButton'>Register</button>
        
        </form>

        <button className='LoginButton' >Login</button>
    </div>
  )
}
