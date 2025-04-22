import React from "react";
import shop_banner from "../assets/Figma/Rectangle.png";

export default function CartPage() {
  return (
    <>
      <div className='pt-[55px]'></div>
      <div className="relative w-full h-[100px] md:h-[300px]">
        <img src={shop_banner} alt="Shop Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl md:text-6xl font-semibold text-black">Cart</span>
        </div>
      </div>
      <div className=" bg-white flex flex-col md:flex-row gap-6">
        {/* Cart Table */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <table className="w-full text-center">
            <thead className="bg-amber-50">
              <tr className="text-xs md:text-sm text-gray-700">
                <th className="p-4 ">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white ">
                <td className="p-4 flex flex-col md:flex-row items-center justify-center md:gap-4">
                  <img
                    src="https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772696.jpg?semt=ais_hybrid&w=740"
                    alt="Asgaard sofa"
                    className="w-10 h-10 md:w-24 md:h-24 object-cover rounded-md"
                  />
                  <span className="text-xs md:text-sm text-gray-700">Asgaard sofa</span>
                </td>
                <td className="p-4 text-xs md:text-sm text-gray-500">TK 250,000</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-10 h-8 text-center border rounded-md"
                  />
                </td>
                <td className="py-4 text-xs md:text-sm text-gray-700 font-medium">
                  Tk 250,000
                </td>
                <td className="p-4">
                  <button>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                      alt="Delete"
                      className="w-4 h-4 hover:scale-110  duration-150 "
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-slate-200 p-6 ">
          <h2 className="text-lg font-bold mb-4 text-center">Cart Totals</h2>
          <div className="flex justify-between text-xs md:text-sm mb-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-gray-500">Tk 250,000</span>
          </div>
          <div className="flex justify-between text-xs md:text-sm mb-6">
            <span className="text-gray-700 font-semibold">Total</span>
            <span className="text-yellow-700 font-bold">Tk 250,000</span>
          </div>
          <button className="w-full py-2 border border-orange-500 rounded-md transition hover:bg-orange-500 hover:text-white">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
