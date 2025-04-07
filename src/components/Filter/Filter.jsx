import React from 'react';

const Filter = () => {
    return (
        <div className="bg-[#F9F1E7] py-4 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left Section: Filter and Icons */}
            <div className="flex flex-wrap items-center gap-4">
                {/* Filter Button */}
                <button className="flex items-center space-x-2 text-gray-700">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                    </svg>
                    <span>Filter</span>
                </button>

                {/* Grid/List View Icons */}
                <button className="text-gray-700">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                    </svg>
                </button>
                <button className="text-gray-700">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"
                        />
                    </svg>
                </button>

                {/* Results Text */}
                <span className="text-gray-700 text-sm sm:text-base">
                    Showing 1–16 of 32 results
                </span>
            </div>

            {/* Right Section: Show and Sort By */}
            <div className="flex flex-wrap items-center gap-4">
                {/* Show Dropdown */}
                <div className="flex items-center space-x-2">
                    <label htmlFor="show" className="text-gray-700">
                        Show
                    </label>
                    <select
                        id="show"
                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                        defaultValue="16"
                    >
                        <option value="8">8</option>
                        <option value="16">16</option>
                        <option value="32">32</option>
                    </select>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex items-center space-x-2">
                    <label htmlFor="sort" className="text-gray-700">
                        Sort by
                    </label>
                    <select
                        id="sort"
                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                        defaultValue="default"
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;
