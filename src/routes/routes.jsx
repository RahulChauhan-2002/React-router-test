import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/', element:<Home/>
            },
            {
                path:'/About', element:<About/>
            },
            {
                path:'/Contact', element:<Contact/>
            }
        ]
    }
])

export default routes