import React from 'react';
import { navData } from '../data';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
  return (
    <>
    <div className="flex justify-between mx-4 mt-3 pt-3 overflow-x-auto bg-white scrollbar-hide">
      {navData.map((item, index) => (
        <div key={index} className="p-3 text-center flex-shrink-0">
          <img src={item.url} alt={item.text} className="w-16" />
          <p className="text-sm font-semibold">{item.text}</p>
        </div>
      ))}
    </div>
    <Banner/>
    <Products/>

    </>
    
  );
  
};

export default Home;