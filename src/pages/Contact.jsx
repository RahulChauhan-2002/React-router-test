import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate=useNavigate();
    const clickHandle=()=>{
        navigate('/');
    }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 gap-5">
        <h1 className="text-2xl font-bold">Welcome! to Contact page</h1>
        <button onClick={clickHandle} className='cursor-pointer bg-blue-600 text-white px-2 py-1 font-bold rounded-md'>Goto Home Page </button>
    </div>
  )
}

export default Contact