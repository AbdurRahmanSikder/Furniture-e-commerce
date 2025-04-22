import React, { useState } from 'react';
import shop_banner from "../assets/Figma/Rectangle.png";
import Items from '../components/Items/Items';
import All_product from '../assets/Figma/All_product/All_product';
import Filter from "../components/Filter/Filter"
const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3];

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className='pt-[55px]'></div>
      <div className="relative w-full h-[100px] md:h-[300px]">
        <img src={shop_banner} alt="Shop Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl md:text-6xl font-semibold text-black">Shop</span>
        </div>
      </div>
      <div className='pb-[5px] md:pb-[20px]'></div>
      <Filter />
      <div className='grid grid-cols-3 gap-2 px-4 lg:px-0 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 '>
        {
          All_product.map((item, i) => {
            return <Items key={i} image={item.image} description={item.description}
              old_price={item.old_price} new_price={item.new_price} name={item.name}
              discount={item.discount} />
          })
        }
      </div>
      <div className="flex justify-center items-center gap-4 py-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-10 h-10 rounded-md text-center text-sm font-medium transition-colors ${currentPage === page
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-black hover:bg-yellow-200"
              }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length}
          className="w-16 h-10 rounded-md bg-yellow-100 text-black text-sm font-medium hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Shop;