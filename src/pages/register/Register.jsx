import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <fieldset>
        <h1 className='registertitle'>Register</h1>
        <form className='registerform'>
          <label>Name</label>
          <input type="text" placeholder='Name' />
          <label>Email</label>
          <input type="text" placeholder='Email' />
          <label>Password</label>
          <input type="password" placeholder='Password' />
          <button className='registerbtn'>Register</button>
        </form>
        <button className='login'>Login</button>
      </fieldset>
    </div>
  )
}