import React, { useState } from 'react';
import Logo from '../../assets/Figma/Meubel House_Logos-05.png';
import { VscAccount } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(0); // Example count
    const [cartCount, setCartCount] = useState(3); // Example count

    return (
        <>
            <nav className="px-6 py-3 flex items-center justify-between">
                {/* Logo and Mobile Menu */}
                <div className="flex items-center gap-2 cursor-pointer">
                    {/* Mobile Menu Button */}
                    <div className="md:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="absolute z-10 top-14 left-0 w-full flex flex-col pl-8 gap-4 py-4 text-lg shadow-lg bg-white md:hidden">
                            <div className='cursor-pointer'>Home</div>
                            <div className='cursor-pointer'>Shop</div>
                            <div className='cursor-pointer'>About</div>
                            <div className='cursor-pointer'>Contact</div>
                            <div className='flex gap-6 text-2xl mt-4'>
                                <div className='cursor-pointer'><VscAccount /></div>
                            </div>
                        </div>
                    )}

                    <div className='w-[50px] h-[32px]'>
                        <img src={Logo} alt="Furniro Logo" />
                    </div>
                    <div className="text-3xl font-bold hidden md:flex">Furniture</div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4 lg:gap-8">
                    <div className='cursor-pointer'>Home</div>
                    <div className='cursor-pointer'>Shop</div>
                    <div className='cursor-pointer'>About</div>
                    <div className='cursor-pointer'>Contact</div>
                </div>

                {/* Icons with counts */}
                <div className='flex gap-2 lg:gap-4 text-2xl'>
                    <div className='cursor-pointer hidden md:flex'><VscAccount /></div>
                    <div className='cursor-pointer'><LuSearch /></div>

                    {/* Wishlist */}
                    <div className='relative cursor-pointer'>
                        <MdFavoriteBorder />
                        {wishlistCount > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                                {wishlistCount}
                            </span>
                        )}
                    </div>

                    {/* Cart */}
                    <div className='relative cursor-pointer'>
                        <BsCart3 />
                        {cartCount > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
