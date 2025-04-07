import React from "react";
import { X } from "lucide-react";

const CartSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 h-full w-[90vw] max-w-sm bg-white shadow-xl p-6 overflow-y-auto z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-6 mt-6">Shopping Cart</h2>

        {/* Cart Items */}
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Asgaard sofa",
              price: 250000,
              image: "https://via.placeholder.com/80",
            },
            {
              title: "Casaliving Wood",
              price: 270000,
              image: "https://via.placeholder.com/80",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs">
                  1 x{" "}
                  <span className="text-yellow-600 font-semibold">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </p>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between font-semibold text-sm">
            <span>Subtotal</span>
            <span className="text-yellow-600">Rs. 520,000.00</span>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <button className="flex-1 border border-black py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
            Cart
          </button>
          <button className="flex-1 border border-black py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
            Checkout
          </button>
          
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
