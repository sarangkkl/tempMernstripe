import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Dashboard from '../adminPanel/Dashboard'


const AdminRoutes = () => {
  return (
    <>
    <Dashboard/>
    <Routes>
      
      <Route path='/about' element={<h1>about  element</h1>}/>

      
    </Routes>
    </>
  )
}

export default AdminRoutes