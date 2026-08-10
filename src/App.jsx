import Navbar from "./component/Navbar.jsx"
import Home from "./page/Home.jsx"
import Cart from "./page/Cart.jsx"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import "./App.css"
import { useState } from "react"

const App = () => {
  const [cart,setcart]=useState([])
  return (
    <>
      <BrowserRouter>
    <Navbar/>
    <div className="container">
        <Routes>
            <Route path="/" element={<Home setcart={setcart} cart={cart}/>}> </Route>
            <Route path="/Cart" element={<Cart setcart={setcart} cart={cart}/>}> </Route>

        </Routes>
        
    </div>
    </BrowserRouter>
   <footer>
    <div className="contact">
     
      © Copyright 2026 <span>Swiggy</span>
    </div>
   </footer>
    </>
  
  )
}

export default App