import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import OurProducts from '../components/OurProducts/OurProducts'

const LandingPage = () => {
    return (
        <>
            <div className="w-full ">
                
                <Home />
                <OurProducts />
                
            </div>
        </>
    )
}

export default LandingPage