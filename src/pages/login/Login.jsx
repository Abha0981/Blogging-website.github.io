import './login.css'
import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className='login'>
      <fieldset>
        <h1 className='logintitle'>Login</h1>
        <form className='loginform'>
          <label>Email</label>
          <input type="text" placeholder='Email' />
          <label>Password</label>
          <input type="password" placeholder='Password' />
          <button className='loginbtn'>Login</button>
        </form>
        <button className='register_btn'><Link to ='/register' className='link'>Register</Link></button>
      </fieldset>
    </div>
  )
}