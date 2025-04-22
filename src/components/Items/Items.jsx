import React from 'react';

const Items = ({ image, description, new_price, old_price, discount }) => {
  return (
    <div className="max-w-sm bg-[#F4F5F7] hover:bg-slate-300 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={description} className="w-full h-60 object-cover" />
        {discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
            -{discount}%
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="py-5 pr-5 pl-2 ">
        <h2 className="text-sm md:lg lg:xl font-semibold text-gray-800">{description}</h2>
        <p className="text-sm text-gray-500 ">Stylish cafe chair</p>
        
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-sm md:lg lg:xl font-bold text-gray-900">Tk {new_price}</span>
          <span className="text-sm md:lg lg:xl text-gray-400 line-through">Tk {old_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Items;
