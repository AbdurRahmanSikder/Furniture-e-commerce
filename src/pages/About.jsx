import React from 'react'
import shop_banner from "../assets/Figma/Rectangle.png";

const About = () => {
    return (
        <>
            <div className='pt-[55px]'></div>
                  <div className="relative w-full h-[100px] md:h-[300px]">
                    <img src={shop_banner} alt="Shop Banner" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl md:text-6xl font-semibold text-black">About</span>
                    </div>
                  </div>

            <div className="min-h-52 flex flex-col items-center justify-center bg-gray-50 p-6">
                <p className="text-lg text-gray-700 max-w-xl text-center">
                    Welcome to our furniture store! We design timeless, elegant pieces that bring comfort and style to your home. Our mission is to deliver quality craftsmanship using sustainable materials.
                </p>
            </div>
        </>
    )
}

export default About