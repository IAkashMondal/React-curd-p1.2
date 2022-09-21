import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <h1>Navbar</h1>
  <NavLink to="/login" >Login</NavLink>
  <NavLink to="/books" >Books</NavLink>
    </div>
  )
}

export default NavBar
