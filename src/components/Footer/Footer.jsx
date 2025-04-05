import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-2 md:px-0 border-t mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg">Furniture.</h2>
          <p className="text-[#9F9F9F] md:mt-5 text-sm">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 France
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-[#9F9F9F] ">Links</h3>
          <ul className="md:mt-5 md:space-y-5`">
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">Home</a></li>
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">Shop</a></li>
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">About</a></li>
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[#9F9F9F] ">Help</h3>
          <ul className="md:mt-5 md:space-y-5">
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">Payment Options</a></li>
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">Returns</a></li>
            <li><a href="#"  className="font-semibold text-gray-700 hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#9F9F9F] ">Newsletter</h3>
          <div className="mt-2 md:mt-5 flex border-none overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className=" focus:outline-none text-[14px] border-b-[1px] border-black "
              
            />
            <br></br>
            <button className="text-[14px] border-b-[1px] border-black ml-4 font-semibold">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-600 mt-6 border-t pt-4">
        <p>2023 Furniture. All rights reserved</p>
      </div>
    </footer>

  )
}

export default Footer