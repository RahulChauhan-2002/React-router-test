import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-5 bg-amber-200'>
      {/* Logo */}
      <img
        className="w-35 h-20 object-contain"
        src="./assets/Logo.png"
        alt="Logo"
      />
      
      {/* Navigation Links */}
      <ul className='flex gap-5 font-bold cursor-pointer'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Products'><li>Products</li></Link>
      </ul>

      {/* Button */}
      <button className="font-bold border-2 rounded-full px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 transition shadow-5xl">
        Click Me
      </button>
    </div>
  )
}

export default Navbar
