import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import OurProducts from './components/OurProducts/OurProducts'
function App() {
  return (
    <>
      <div className="w-full mx-auto lg:w-[70vw]">
        <Navbar />
        <Home />
        <OurProducts />
        <Footer />
      </div>
    </>
  )
}

export default App
