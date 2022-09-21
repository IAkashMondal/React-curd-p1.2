import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from '../Pages/Books'
import EditBook from '../Components/EditBook'
import Login from '../Pages/Login'
import SingleBook from '../Components/SingelBook'
import NavBar from '../Components/NavBar'
import PrivateRoute from '../Auth/PrivateRoute'

const Allroutes = () => {
  return (
    <>
  <Routes>
    <Route path="/" element={<NavBar/>}/>
  <Route path="/books" element={<Books />} />
  <Route path="/books/:id" element={<SingleBook />} />
  <Route path="/books/:id/edit" element={<PrivateRoute><EditBook /></PrivateRoute>} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
  </Routes>
    </>
  )
}

export default Allroutes
