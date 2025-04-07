import { useState } from "react";
import banner from "../assets/Figma/Login_banner.avif"
export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Blurry Background Image */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-md opacity-70 z-0" style={{ backgroundImage: `url(${banner})` }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isLogin ? "Welcome Back" : "Get Started Now"}
          </h2>
          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            )}
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            {!isLogin && (
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms & policy
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-700 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition"
            >
              {isLogin ? "Login" : "Signup"}
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="text-center text-sm text-gray-600 block xl:hidden">Sign in with </div>  
            <div className="flex justify-center gap-4">
              <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-sm">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-1 md:mr-2" />
                <span className="block xl:hidden "> Google</span>
                <span className="hidden xl:block">Sign in with Google</span>
              </button>
              <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-sm">
                <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                <span className="block xl:hidden "> Facebook</span>
                <span className="hidden xl:block">Sign in with facebook</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              {isLogin ? "Don't have an account?" : "Have an account?"}
              <button
                onClick={toggleForm}
                type="button"
                className="text-green-700 hover:underline ml-1"
              >
                {isLogin ? "Signup" : "Sign in"}
              </button>
            </p>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={banner}
            alt="Leaf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
