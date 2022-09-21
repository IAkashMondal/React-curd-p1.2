import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../Redux/AuthRedux/action';

const Login = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const dispatch =useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const previouspage =location.state?.data || "/books"
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(LOGIN({email,password})).then((r)=>{
        navigate(previouspage,{replace:true})
      })
      
    }

  }
  return (
    <div>
        <header>Login</header>
        <p>eve.holt@reqres.in</p>
      <form onSubmit={handelSubmit}>
      <div>
      <label>Email</label>
        <input type={"email"} value={email} placeholder="eve.holt@reqres.in" onChange={(e)=> setemail(e.target.value)}/>
      </div>
      <div>
      <label>Password</label>
        <input type={"password"} value={password} placeholder="password" onChange={(e)=> setpassword(e.target.value)}/>
      </div>
      <button type='submit' >Login</button>
      </form>
    </div>
  )
}

export default Login
