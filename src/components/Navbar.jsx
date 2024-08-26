/*import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
const Header = () => {
  return (
    <div className="bg-white h-[55px] flex items-center">
      <div className=" flex items-center ml-[2%]">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="Flipkart"
          width="160"
          height="40"
          title="Flipkart"
        />
      </div>
      <div className="relative w-[50%] ml-5">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
        />
      </div>
      <div className="ml-auto flex items-center text-black text-sm  font-light mr-28 space-x-8">
        <Link to="/login" className="flex items-center cursor-pointer ">
          <CgProfile size={25} />
          <p className="ml-1 text-lg text-gray-950">Login</p>
        </Link>
  
        <Link to="/cart" className="flex items-center ">
           <IoCartOutline size={25}/>
          <span className="ml-1">Cart</span>
        </Link>
        <Link to="/seller" className="flex items-center ">
        <CiShop size={25}/>
          <span className="ml-1">Become a Seller</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
*/


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
        />
      </div>
      <div className="ml-auto  items-center text-black text-sm font-light mr-28 space-x-8 hidden md:flex">
        <Link to="/login" className="flex items-center cursor-pointer">
          <CgProfile size={25} />
          <p className="ml-1 text-lg text-gray-950">Login</p>
        </Link>
        <Link to="/cart" className="flex items-center">
          <IoCartOutline size={25} />
          <span className="ml-1">Cart</span>
        </Link>
        <Link to="/seller" className="flex items-center">
          <CiShop size={25} />
          <span className="ml-1">Become a Seller</span>
        </Link>
      </div>
      <div className={`absolute top-[55px] left-0 w-full bg-white shadow-lg p-4 flex flex-col items-start space-y-4 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="relative w-full">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="pl-10 p-2 w-full rounded bg-[#f1f3f6] outline-none"
          />
        </div>
        <Link to="/login" className="flex items-center">
          <CgProfile size={25} />
          <span className="ml-2">Login</span>
        </Link>
        <Link to="/cart" className="flex items-center">
          <IoCartOutline size={25} />
          <span className="ml-2">Cart</span>
        </Link>
        <Link to="/seller" className="flex items-center">
          <CiShop size={25} />
          <span className="ml-2">Become a Seller</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
