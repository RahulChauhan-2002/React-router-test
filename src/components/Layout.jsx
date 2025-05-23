import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center justify-items-center items-center'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout