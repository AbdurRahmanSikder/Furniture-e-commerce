import React from 'react'
import shop_banner from "../assets/Figma/Rectangle.png";

const Contact = () => {
    return (
        <>
            <div className="relative">
                <img src={shop_banner} alt="Shop Banner" className="w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-semibold">Contact</span>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-2">Get In Touch With Us</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        For more information about our product & services, please feel free
                        to drop us an email. Our staff always be there to help you out. Do
                        not hesitate!
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Contact Info */}
                    <div className="space-y-10 lg:w-1/2">
                        <div className="flex gap-4 items-start">
                            <span className="text-2xl">📍</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Address</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <span className="text-2xl">📞</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                <p>Mobile: +(84) 546-6789</p>
                                <p>Hotline: +(84) 456-6789</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <span className="text-2xl">🕒</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Working Time</h3>
                                <p>Monday–Friday: 9:00 – 22:00</p>
                                <p>Saturday–Sunday: 9:00 – 21:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form className="lg:w-1/2 space-y-6">
                        <div>
                            <label className="block mb-1 font-medium">Your name</label>
                            <input
                                type="text"
                                placeholder="Abc"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email address</label>
                            <input
                                type="email"
                                placeholder="Abc@def.com"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="This is an optional"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                placeholder="Hi! I'd like to ask about"
                                rows={4}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#B88E2F] hover:bg-yellow-500 text-white py-2 px-20 rounded-md transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact