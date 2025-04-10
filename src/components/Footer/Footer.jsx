import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-2 md:px-0 border-t mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-4">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg">Furniture.</h2>
          <p className="text-[#9F9F9F] md:mt-5 text-sm">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 France
          </p>
        </div>

        {/* Links + Help Group in 2 grid cells */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
          {/* Links */}
          <div>
            <h3 className="text-[#9F9F9F]">Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">Home</a></li>
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">Shop</a></li>
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">About</a></li>
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[#9F9F9F]">Help</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">Payment Options</a></li>
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">Returns</a></li>
              <li><a href="#" className="font-semibold text-gray-700 hover:underline">Privacy Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#9F9F9F]">Newsletter</h3>
          <div className="mt-4 flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="text-sm border-b border-black focus:outline-none py-1 w-full"
            />
            <button className="text-sm border-b border-black font-semibold py-1 whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-600 mt-6 border-t pt-4">
        <p>2023 Furniture. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
