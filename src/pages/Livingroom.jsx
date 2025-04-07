import React from 'react'
import Livingroom_product from '../assets/Figma/Living room/Living'
import Items from '../components/Items/Items';
const Livingroom = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="mb-16 mt-10 text-4xl font-bold">Our Products</div>
            </div>
            <div className='grid grid-cols-2 gap-2 px-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 '>
                {
                    Livingroom_product.map((item, i) => {
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

export default Livingroom