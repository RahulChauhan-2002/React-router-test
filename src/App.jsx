import Navbar from "./components/Navbar"
import Home from  "./pages/Home"
import About from  "./pages/About"
import Products from  "./pages/Products"
import Contact from  "./pages/Contact"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

function App() {
  

  return ( 
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
      </Routes>
    </div> 
  )
}

export default App
