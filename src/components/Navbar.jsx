import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center font-bold text-xl relative">
      {/* Left: Logo */}
      <div className="absolute left-6">
        <img
          className="w-[120px] h-14 object-contain"
          src={Logo}
          alt="Logo"
        />
      </div>

      {/* Center: NavLinks */}
      <div className="mx-auto flex gap-10 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold' : 'text-white'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold' : 'text-white'
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold' : 'text-white'
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right: Button */}
      <div className="absolute right-6">
        <button className="border-2 rounded-full px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 transition shadow-lg">
          Click Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar
