import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Add useNavigate here

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      navigate('/'); // Redirect to home or another route
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md flex h-[500px]"> 
        <div className="w-[45%] bg-blue-600 text-white p-10 flex flex-col ">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <p>Get access to your Orders, Wishlist, and Recommendations</p>
        </div>

        <div className="w-1/2 p-10 flex flex-col ">
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-400 focus:outline-none focus:border-blue-600 mb-6 pb-2"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b border-gray-400 focus:outline-none focus:border-blue-600 mb-6 pb-2"
          />
          <p className="text-sm text-gray-500 mb-6">
            By continuing, you agree to Flipkart's 
            <a href="https://example.com" className="text-blue-600 ml-1">Terms of Use</a> and 
            <a href="https://example.com" className="text-blue-600 ml-1">Privacy Policy</a>.
          </p>
          <button
            onClick={handleLogin} // Attach handleLogin to the button
            className="bg-orange-500 text-white text-lg font-semibold py-2 rounded hover:bg-orange-600"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="/signup" className="text-blue-600 text-sm">
              New to Flipkart? Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
