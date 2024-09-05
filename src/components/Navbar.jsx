// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { CiSearch } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
// import { IoCartOutline } from "react-icons/io5";
// import { CiShop } from "react-icons/ci";
// import { AiOutlineMenu } from "react-icons/ai";
// import { useSelector } from 'react-redux';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase'; // Import your Firebase auth
// import SearchResultList from './SearchResultList.jsx';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [input, setInput] = useState(""); // State for search input
//   const [results, setResults] = useState([]); // State for search results
//   const cartItems = useSelector((state) => state.handleCart);
//   const [user] = useAuthState(auth); // Get the currently logged-in user

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Function to fetch data based on search input
//   const fetchData = (value) => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((product) => {
//           return (
//             value &&
//             product &&
//             product.title &&
//             product.title.toLowerCase().includes(value.toLowerCase())
//           );
//         });
//         setResults(results);
//       });
//   };

//   // Handle input change and fetch data
//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <div className="bg-white h-[55px] flex items-center justify-between px-4">
//       <div className="flex items-center">
//         <AiOutlineMenu 
//           className="md:hidden mr-2 cursor-pointer"
//           size={25} 
//           onClick={toggleMenu}
//         />
//         <img
//           src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
//           alt="Flipkart"
//           width="160"
//           height="40"
//           title="Flipkart"
//         />
//       </div>
//       <div className="relative w-[50%] ml-5 hidden md:block">
//         <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//         <input
//           type="text"
//           placeholder="Search for Products, Brands and More"
//           value={input}
//           onChange={(e) => handleChange(e.target.value)}
//           className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
//         />
//         <SearchResultList results={results} />
//       </div>
//       <div className="ml-auto items-center text-black text-sm font-light mr-28 space-x-8 hidden md:flex">
//         <div 
//           className="relative flex items-center cursor-pointer"
//           onMouseEnter={toggleDropdown}
//           onMouseLeave={toggleDropdown}
//         >
//           <CgProfile size={25} />
//           <p className="ml-1 text-lg text-gray-950">
//             {user ? user.displayName : 'Login'}
//           </p>

//           {dropdownOpen && (
//             <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
//               {!user ? (
//                 <Link to="/login" className="flex items-center p-2 hover:bg-gray-100">
//                   <span className="ml-2">Login</span>
//                 </Link>
//               ) : (
//                 <>
//                   <Link to="/wishlist" className="flex items-center p-2 hover:bg-gray-100">
//                     <span className="ml-2">Wishlist</span>
//                   </Link>
//                   <Link to="/" onClick={() => auth.signOut()} className="flex items-center p-2 hover:bg-gray-100">
//                     <span className="ml-2">Logout</span>
//                   </Link>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="relative flex items-center">
//           <Link to="/cart" className="flex items-center">
//             <IoCartOutline size={25} />
//             <span className="ml-1">Cart</span>
//           </Link>
//           {cartItems.length > 0 && (
//             <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {cartItems.length}
//             </div>
//           )}
//         </div>
//         <Link to="/seller" className="flex items-center">
//           <CiShop size={25} />
//           <span className="ml-1">Become a Seller</span>
//         </Link>
//       </div>
//       <div className={`absolute top-[55px] left-0 w-full bg-white shadow-lg p-4 flex flex-col items-start space-y-4 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="relative w-full">
//           <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//           <input
//             type="text"
//             placeholder="Search for Products, Brands and More"
//             value={input}
//             onChange={(e) => handleChange(e.target.value)}
//             className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
//           />
//           <SearchResultList results={results} />
//         </div>
//         <Link to="/login" className="flex items-center">
//           <CgProfile size={25} />
//           <span className="ml-2">Login</span>
//         </Link>
//         <Link to="/cart" className="flex items-center relative">
//           <IoCartOutline size={25} />
//           <span className="ml-2">Cart</span>
//           {cartItems.length > 0 && (
//             <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {cartItems.length}
//             </div>
//           )}
//         </Link>
//         <Link to="/seller" className="flex items-center">
//           <CiShop size={25} />
//           <span className="ml-2">Become a Seller</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Import your Firebase auth

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState(""); // State for search input
  const cartItems = useSelector((state) => state.handleCart);
  const [user] = useAuthState(auth); // Get the currently logged-in user
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle search and navigate to the product page
  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Fetch the products from the fakestoreapi
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
          const matchedProduct = products.find((product) =>
            product.title.toLowerCase().includes(input.toLowerCase())
          );
          if (matchedProduct) {
            // Navigate to the product page if match is found
            navigate(`/product/${matchedProduct.id}`);
          } else {
            alert("No product found!"); // Display message if no product is found
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          alert("Something went wrong! Please try again.");
        });
    }
  };

  return (
    <div className="bg-white h-[55px] flex items-center justify-between px-4">
      <div className="flex items-center">
        <AiOutlineMenu 
          className="md:hidden mr-2 cursor-pointer"
          size={25} 
          onClick={toggleMenu}
        />
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="Flipkart"
          width="160"
          height="40"
          title="Flipkart"
        />
      </div>

      <div className="relative w-[50%] ml-5 hidden md:block">
        <form onSubmit={handleSearch}>
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
          />
        </form>
      </div>

      <div className="ml-auto items-center text-black text-sm font-light mr-28 space-x-8 hidden md:flex">
        <div 
          className="relative flex items-center cursor-pointer"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <CgProfile size={25} />
          <p className="ml-1 text-lg text-gray-950">
            {user ? user.displayName : 'Login'}
          </p>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
              {!user ? (
                <Link to="/login" className="flex items-center p-2 hover:bg-gray-100">
                  <span className="ml-2">Login</span>
                </Link>
              ) : (
                <>
                  <Link to="/wishlist" className="flex items-center p-2 hover:bg-gray-100">
                    <span className="ml-2">Wishlist</span>
                  </Link>
                  <Link to="/" onClick={() => auth.signOut()} className="flex items-center p-2 hover:bg-gray-100">
                    <span className="ml-2">Logout</span>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        <div className="relative flex items-center">
          <Link to="/cart" className="flex items-center">
            <IoCartOutline size={25} />
            <span className="ml-1">Cart</span>
          </Link>
          {cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </div>
          )}
        </div>

        <Link to="/seller" className="flex items-center">
          <CiShop size={25} />
          <span className="ml-1">Become a Seller</span>
        </Link>
      </div>

      <div className={`absolute top-[55px] left-0 w-full bg-white shadow-lg p-4 flex flex-col items-start space-y-4 z-50 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="relative w-full">
          <form onSubmit={handleSearch}>
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
            />
          </form>
        </div>

        <Link to="/login" className="flex items-center">
          <CgProfile size={25} />
          <span className="ml-2">Login</span>
        </Link>

        <Link to="/cart" className="flex items-center relative">
          <IoCartOutline size={25} />
          <span className="ml-2">Cart</span>
          {cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </div>
          )}
        </Link>

        <Link to="/seller" className="flex items-center">
          <CiShop size={25} />
          <span className="ml-2">Become a Seller</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
