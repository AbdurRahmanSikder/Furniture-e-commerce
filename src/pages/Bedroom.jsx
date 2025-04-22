import React from 'react'
import Bedroom_product from '../assets/Figma/Bedroom/Bedroom'
import Items from '../components/Items/Items';
import shop_banner from "../assets/Figma/Rectangle.png";

const Bedroom = () => {
    return (
        <>
            <div className='pt-[55px]'></div>
            <div className="relative w-full h-[100px] md:h-[300px]">
                <img src={shop_banner} alt="Shop Banner" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl md:text-6xl font-semibold text-black">Bedroom</span>
                </div>
            </div>
            <div className='pb-[5px] md:pb-[20px]'></div>
            <div className='grid grid-cols-2 gap-2 px-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 '>
                {
                    Bedroom_product.map((item, i) => {
                        return <Items key={i} image={item.image} description={item.description}
                            old_price={item.old_price} new_price={item.new_price} name={item.name}
                            discount={item.discount} />
                    })
                }
            </div>
            <div className='my-10 w-fit mx-auto '>
                <button className='px-20 py-2 font-semibold border border-[#B88E2F] text-[#B88E2F] transition-transform duration-1000 hover:bg-[#B88E2F] hover:text-white'>Show More</button>
            </div>
        </>
    )
}

export default Bedroom