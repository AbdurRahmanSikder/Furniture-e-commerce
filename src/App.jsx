import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Livingroom_product from './pages/Livingroom'
import CartPage from './pages/Cart'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WishlistPage from './pages/Wishlist'
import Diningroom from './pages/Diningroom'
import Bedroom from './pages/Bedroom'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:w-[70vw] relative'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/wishlist' element={<WishlistPage />} />
            <Route path='/livingroom' element={<Livingroom_product />} />
            <Route path='/diningroom' element={<Diningroom />} />
            <Route path='/bedroom' element={<Bedroom />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App
