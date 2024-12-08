import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import country from '../Pages/country'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/:name" element={<Country/>} />
    </Routes>
  )
}

export default AllRoutes
