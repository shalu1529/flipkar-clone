// // src/context/WishlistContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   // Initialize wishlist from localStorage
//   const [wishlist, setWishlist] = useState(() => {
//     const storedWishlist = localStorage.getItem('wishlist');
//     return storedWishlist ? JSON.parse(storedWishlist) : [];
//   });

//   const addToWishlist = (item) => {
//     setWishlist((prevWishlist) => {
//       const isItemInWishlist = prevWishlist.some((product) => product.id === item.id);
//       const updatedWishlist = isItemInWishlist
//         ? prevWishlist.filter((product) => product.id !== item.id)
//         : [...prevWishlist, item];

//       // Save updated wishlist to localStorage
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   useEffect(() => {
//     // Save wishlist to localStorage whenever it changes
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
//   }, [wishlist]);

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);



import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Function to add or remove an item from the wishlist
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const isItemInWishlist = prevWishlist.some((product) => product.id === item.id);
      const updatedWishlist = isItemInWishlist
        ? prevWishlist.filter((product) => product.id !== item.id)
        : [...prevWishlist, item];

      // Save updated wishlist to localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter(product => product.id !== productId);

      // Save updated wishlist to localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  useEffect(() => {
    // Save wishlist to localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
