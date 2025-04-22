import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/Figma/Meubel House_Logos-05.png';
import { VscAccount } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CartPage from '../../pages/Cart';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [cartCount, setCartCount] = useState(1);
  const location = useLocation();

  return (
    <>
      <nav className="fixed  w-full lg:w-[70vw] mx-auto z-20 px-6 py-3 flex items-center justify-between bg-gray-100/70 backdrop-blur-md border-b border-gray-200/50">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="md:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {menuOpen && (
            <div className="absolute z-10 top-14 left-0 w-full flex flex-col pl-8 gap-4 py-4 text-lg shadow-lg bg-gray-100/70 backdrop-blur-md border-b border-gray-200/50 md:hidden transition-transform duration-1000">
              <Link to="/" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/' ? 'text-blue-600 font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/shop" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/shop' ? 'text-blue-600 font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Shop</Link>
             
              <Link to="/about" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/about' ? 'text-blue-600 font-bold' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/contact' ? 'text-blue-600 font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
             
              <div className="flex items-center gap-2 mt-1">
                <div className="cursor-pointer text-2xl"><VscAccount /></div>
                <div className="text-md">User profile</div>
              </div>
            </div>
          )}

          <div className="w-[50px] h-[32px]">
            <img src={Logo} alt="Furniro Logo" />
          </div>
          <div className="text-3xl font-bold hidden md:flex">Furniture</div>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-8">
          <Link to="/" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/' ? 'text-blue-600 font-bold' : ''}`}>Home</Link>
          <Link to="/shop" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/shop' ? 'text-blue-600 font-bold' : ''}`}>Shop</Link>
          <Link to="/about" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/about' ? 'text-blue-600 font-bold' : ''}`}>About</Link>
          <Link to="/contact" className={`cursor-pointer hover:text-blue-500 ${location.pathname === '/contact' ? 'text-blue-600 font-bold' : ''}`}>Contact</Link>
        </div>

        <div className="flex gap-2 lg:gap-4 text-2xl">
          <Link to='/login'><div className="cursor-pointer hidden md:flex"><VscAccount /></div></Link>
          <div className="cursor-pointer"><LuSearch /></div>
          <Link to="/wishlist">
            <div className="relative cursor-pointer">
              <MdFavoriteBorder />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>
          {/* Cart Icon triggers sidebar */}
          {/* Cart */}
          <Link to="/cart"><div className="relative cursor-pointer">
            <BsCart3 />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
