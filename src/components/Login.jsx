import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md flex h-[500px]"> {/* Set a specific height */}
        {/* Left Section */}
        <div className="w-[45%] bg-blue-600 text-white p-10 flex flex-col ">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <p className="">Get access to your Orders, Wishlist, and Recommendations</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col ">
          <input
            type="text"
            placeholder="Enter Email"
            className="border-b border-gray-400 focus:outline-none focus:border-blue-600 mb-6 pb-2"
          />
          <p className="text-sm text-gray-500 mb-6">
            By continuing, you agree to Flipkart's 
            <a href="https://example.com" className="text-blue-600 ml-1">Terms of Use</a> and 
            <a href="https://example.com" className="text-blue-600 ml-1">Privacy Policy</a>.
          </p>
          <button className="bg-orange-500 text-white text-lg font-semibold py-2 rounded hover:bg-orange-600">
            Login
          </button>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-blue-600 text-sm">
              New to Flipkart? Create an account
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
