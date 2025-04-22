import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import All_product from '../assets/Figma/All_product/All_product';
import Items from '../components/Items/Items';
const tabs = ['Description', 'Additional Information', 'Reviews'];

const ProductDisplay = () => {
  const { productid } = useParams();
  const product = All_product.find((e) => e.id === Number(productid));
  const [selectedTab, setSelectedTab] = useState('Description');

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = ['#666', '#f97316', '#3b82f6', '#991b1b', '#1e40af', '#000', '#facc15', '#6b7280'];
  const sizes = ['M', 'L', 'XL', 'XXL'];

  if (!product) {
    return (
      <></>
    );
  }

  
  let x = 0;
  if (productid < 7)
    x = 0;
  else if (product < 14)
    x = 7;
  else x = 14;
  const { image, name, description, new_price, old_price, discount } = product;

  return (
    <div className="max-w-6xl mx-auto pt-[120px] py-10 px-4">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images Section */}
        <div>
          <div className="relative">
            <img src={image} alt={name} className="w-full rounded-lg border" />
            {discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={image}
                alt={`thumb-${i}`}
                className="w-16 h-16 object-cover border rounded hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">{name}</h1>
          <p className="text-gray-600 text-sm">{description}</p>

          {/* Price */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-bold text-[#B88E2F]">৳ {new_price}</span>
            <span className="line-through text-gray-400">৳ {old_price}</span>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Color Family</h3>
            <div className="flex gap-2">
              {colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === i ? 'ring-2 ring-yellow-500' : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 border rounded ${selectedSize === size ? 'bg-[#B88E2F] text-white' : 'bg-white text-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded text-lg font-bold"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Buy Now
            </button>
            <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-20 border-t pt-10">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`text-lg font-medium ${selectedTab === tab ? 'text-[#B88E2F] border-b-2 border-[#B88E2F]' : 'text-gray-500'}`}
            >
              {tab} {tab === 'Reviews' && "(5)"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {selectedTab === 'Description' && (
            <p className="text-gray-700 max-w-2xl mx-auto">{description}</p>
          )}
          {selectedTab === 'Additional Information' && (
            <p className="text-gray-500 max-w-2xl mx-auto">
              This product is made with premium quality materials and comes with 1 year warranty.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum officia delectus incidunt, pariatur necessitatibus, ex ipsa nobis repellendus perferendis voluptas totam rem inventore consequatur sint minus repudiandae ipsam sunt quaerat reiciendis atque unde odit! Aliquam quo tempore corporis reiciendis, rem minima quam reprehenderit rerum earum nam, repellendus dignissimos? Quo, provident!
            </p>
          )}
          {selectedTab === 'Reviews' && (
            <div className="max-w-2xl mx-auto space-y-6">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="text-left p-4 border rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold">User {idx + 1}</p>
                      <div className="flex text-yellow-400">
                        {'★★★★★'.slice(0, 5)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">This product is amazing! Highly recommend.</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Related Products Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {


            All_product.slice(x, x + 4).map((item, i) => (
              <Items key={i} id={item.id} image={item.image} description={item.description}
                old_price={item.old_price} new_price={item.new_price} name={item.name}
                discount={item.discount} />
            ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-2 border border-[#B88E2F] text-[#B88E2F] rounded hover:bg-[#B88E2F] hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
