import React from "react";
import banner from "../../assets/Figma/banner.jpeg";
import Dining from "../../assets/Figma/Dining.png"
import living from "../../assets/Figma/living.png"
import bedroom from "../../assets/Figma/Bedroom.png"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="md:px-2 pt-[60px]">
            {/* Half-Screen Banner */}
            <div className="relative mx-auto w-full h-[40vh] md:h-[60vh]  flex justify-center items-center">
                <img src={banner} alt="Banner" className="w-full h-full object-cover" />

                {/* Responsive Overlay Box */}
                <div className="absolute w-[60vw] lg:w-[40vw] bg-[#FFF3E3] text-[#333333] px-6 py-4 rounded-md shadow-lg 
                                right-[5%] top-1/2 transform -translate-y-1/2">
                    <div className="md:mt-4">
                        <div className="text-sm md:text-xl font-semibold tracking-[0.15em] mb-2">New Arrival</div>
                        <h1 className="text-2xl md:text-5xl  font-bold text-[#B88E2F]">Discover Our</h1>
                        <h1 className="text-2xl md:text-5xl md:mt-4 font-bold text-[#B88E2F]">New Collection</h1>
                        <p className="text-xs mt-5 md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, perspiciatis!</p>
                        <button className="bg-[#B88E2F] px-4 py-1 mt-4 md:px-14 md:py-4 font-semibold text-white md:text-2xl md:mt-5 md:mb-4 hover:shadow-lg">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center py-8">
                <div className="text-4xl font-bold">Browse The Range</div>
                <p className="mt-4 text-[#666666] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rem.</p>
            </div>

            <div className=" flex gap-2 md:gap-10 items-center justify-center px-2 md:px-0">
                <Link to="/diningroom">
                    <div className="flex flex-col transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
                        <img src={Dining} alt="" />
                        <div className="mx-auto font-semibold my-2">Dinning</div>
                    </div>
                </Link>
                <Link to="/livingroom">
                    <div className="flex flex-col transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
                        <img src={living} alt="" />
                        <div className="mx-auto font-semibold my-2">Living</div>
                    </div>
                </Link>
                <Link to="/bedroom">
                    <div className="flex flex-col transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
                        <img src={bedroom} alt="" />
                        <div className="mx-auto font-semibold my-2">Bedroom</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
