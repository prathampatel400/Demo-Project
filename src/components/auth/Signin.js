import React from 'react'
import './Signin.scss'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <div className='SignIn'>
        <h1>Sign In</h1>
        <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password"/><br/>
        <Link to='/Allproducts'><button>Submit</button></Link>
    </div>
    </>
  )
}

export default Signin
