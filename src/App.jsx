import React from 'react'
import routes from './routes/routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
  
}

export default App