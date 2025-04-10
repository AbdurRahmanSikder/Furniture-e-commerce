import React from "react";
import shop_banner from "../assets/Figma/Rectangle.png"; // Replace with your banner path

export default function WishlistPage() {
    return (
        <>
            {/* Banner */}
            <div className="relative">
                <img src={shop_banner} alt="Shop Banner" className="w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-semibold">Wishlist</span>
                </div>
            </div>

            {/* Wishlist Table */}
            <div className="bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead className="bg-amber-50">
                            <tr className="text-xs md:text-sm text-gray-700">
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Stock Status</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="p-4 flex flex-col md:flex-row items-center justify-center md:gap-4">
                                    <img
                                        src="https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772696.jpg?semt=ais_hybrid&w=740"
                                        alt="Asgaard sofa"
                                        className="w-10 h-10 md:w-24 md:h-24 object-cover rounded-md"
                                    />
                                    <span className="text-xs md:text-sm text-gray-700">Asgaard sofa</span>
                                </td>
                                <td className="p-4 text-xs md:text-sm text-gray-500">TK 250,000</td>
                                <td className="p-4 text-green-600 font-medium text-xs md:text-sm">In Stock</td>
                                <td className="p-4 ">
                                    <div className="flex items-center justify-center">
                                        <button className="text-xs md:text-sm px-3 py-1 border border-black rounded hover:bg-black hover:text-white transition">
                                            Add to Cart
                                        </button>
                                        <button className="ml-4">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                                                alt="Delete"
                                                className="w-5 h-5 hover:scale-110 duration-150 "
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
