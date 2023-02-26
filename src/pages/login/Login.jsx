import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <h1 className='logintitle'>Login</h1>
      <form className='loginform'>
          <label>Email</label>
          <input type="text" placeholder='Email'/>
          <label>Password</label>
          <input type="password" placeholder='Password'/>
          <button className='loginbtn'>Login</button>
      </form>
      <button className='register'>Register</button>
    </div>
  )
}