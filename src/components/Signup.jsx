import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md flex h-[500px]"> {/* Set a specific height */}
        {/* Left Section */}
        <div className="w-[40%] bg-blue-600 text-white p-10 flex flex-col ">
          <h2 className="text-3xl font-bold mb-4">Looks like you're new here!</h2>
          <p className="">Sign up with your Email to get started</p>
        </div>

        {/* Right Section */}
        <div className="w-[45%] p-9 flex flex-col ml-7">
          <input
            type="text"
            placeholder="Enter Email"
            className="border-b border-gray-400 focus:outline-none focus:border-blue-600 mb-6 pb-2"
          />
          <input
            type="Password"
            placeholder="enter password"
            className="border-b border-gray-400 focus:outline-none focus:border-blue-600 mb-6 pb-2"
          />
          <p className="text-sm text-gray-500 mb-6">
            By continuing, you agree to Flipkart's 
            <a href="https://example.com" className="text-blue-600 ml-1">Terms of Use</a> and 
            <a href="https://example.com" className="text-blue-600 ml-1">Privacy Policy</a>.
          </p>
          <button className="bg-orange-500 text-white text-lg font-semibold py-2 rounded hover:bg-orange-600">
            Sign Up
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
