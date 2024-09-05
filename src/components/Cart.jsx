// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { addCart, delCart } from "../redux/action";

// const Cart = () => {
//   const state = useSelector((state) => state.handleCart);
//   const dispatch = useDispatch();

//   const handleAdd = (item) => {
//     dispatch(addCart(item));
//   };

//   const handleDel = (item) => {
//     dispatch(delCart(item));
//   };

//   const emptyCart = () => (
//     <div className="flex flex-col items-center h-screen">
//       <div className="text-center bg-white px-[40%] py-10">
//         <img
//           src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
//           alt="Empty Cart"
//           className="mb-4 w-40 h-36"
//         />
//         <h3 className="text-lg font-semibold">Your cart is empty!</h3>
//         <p className="text-gray-600">Add items to it now.</p>
//         <NavLink
//           to="/"
//           className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Shop now
//         </NavLink>
//       </div>
//       <div className="w-full my-6">
//         <hr className="border-gray-300" />
//         <div className="flex justify-between items-center mt-4">
//           <div className="text-right w-full md:w-auto md:mr-auto">
//             <p className="text-gray-600">
//               Policies: Returns Policy | Terms of use | Security | Privacy |
//               Infringement | © 2007-2024 Flipkart.com
//             </p>
//           </div>
//           <div className="ml-8">
//             <p className="text-blue-600">
//               Need help? Visit the Help Center Contact Us
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const cartItems = (product) => (
//     <div key={product.id} className="flex justify-between bg-white shadow-lg rounded-lg p-4 mb-4">
    
//       <div className="flex-shrink-0">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-24 h-24 object-cover md:w-32 md:h-32"
//         />
//         <div className="flex items-center justify-between mt-2">
//           <button
//             className="px-2 py-1 border border-gray-400 rounded-md"
//             onClick={() => handleDel(product)}
//           >
//             -
//           </button>
//           <span className="mx-2">{product.qty}</span>
//           <button
//             className="px-2 py-1 border border-gray-400 rounded-md"
//             onClick={() => handleAdd(product)}
//           >
//             +
//           </button>
//         </div>
//       </div>

      
//       <div className="flex-grow pl-4">
//         <h3 className="text-lg font-semibold">{product.title}</h3>
//         <p className="text-gray-500 text-sm">Seller: {product.seller}</p>
//         <div className="mt-2">
//           <span className="text-green-600 font-semibold">₹{product.price}</span>{' '}
//           <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>{' '}
//           <span className="text-red-600">{product.discount}% Off</span>
//         </div>
//         <p className="text-gray-500 text-sm mt-1">
//           Delivery by {product.deliveryDate} | ₹{product.deliveryCharge === 0 ? 'Free' : product.deliveryCharge}
//         </p>
//         <div className="flex mt-2 space-x-4">
//           <button className="text-blue-600">Save for Later</button>
//           <button className="text-red-600" onClick={() => handleDel(product)}>Remove</button>
//         </div>
//       </div>
//     </div>
//   );

//   const priceDetails = () => {
//     const totalPrice = state.reduce((total, product) => total + product.price * product.qty, 0);
//     const totalDiscount = state.reduce((total, product) => total + (product.originalPrice - product.price) * product.qty, 0);
//     const deliveryCharges = state.some(product => product.deliveryCharge > 0) ? 80 : 0;
//     const securedPackagingFee = 59;
//     const finalAmount = totalPrice - totalDiscount + deliveryCharges + securedPackagingFee;

//     return (
//       <div className="bg-white shadow-lg rounded-lg p-4">
//         <h4 className="font-semibold text-lg">PRICE DETAILS</h4>
//         <hr className="my-2" />
//         <div className="flex justify-between my-2">
//           <span>Price ({state.length} items)</span>
//           <span>₹{totalPrice}</span>
//         </div>
//         <div className="flex justify-between my-2">
//           <span>Discount</span>
//           <span className="text-green-600">− ₹{totalDiscount}</span>
//         </div>
//         <div className="flex justify-between my-2">
//           <span>Delivery Charges</span>
//           <span className="text-green-600">₹{deliveryCharges === 0 ? 'Free' : deliveryCharges}</span>
//         </div>
//         <div className="flex justify-between my-2">
//           <span>Secured Packaging Fee</span>
//           <span>₹{securedPackagingFee}</span>
//         </div>
//         <hr className="my-2" />
//         <div className="flex justify-between font-semibold my-2">
//           <span>Total Amount</span>
//           <span>₹{totalPrice}</span>
//         </div>
//         <p className="text-green-600 text-sm mt-2">
//           You will save ₹{totalDiscount} on this order
//         </p>
//       </div>
//     );
//   };

//   const buttons = () => (
//     <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
//       <NavLink
//         to="/checkout"
//         className="block text-center px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
//       >
//         Place Order
//       </NavLink>
//     </div>
//   );

//   return (
//     <div className="bg-gray-100 p-4">
//       {state.length === 0 ? emptyCart() : (
//         <div className="flex flex-col md:flex-row">
          
//           <div className="md:w-2/3 pr-4">
//             {state.map(cartItems)}
//             {buttons()}
//           </div>
          
//           <div className="md:w-1/3">
//             {priceDetails()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => (
    <div className="flex flex-col items-center h-screen">
      <div className="text-center bg-white px-[40%] py-10">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="Empty Cart"
          className="mb-4 w-40 h-36"
        />
        <h3 className="text-lg font-semibold">Your cart is empty!</h3>
        <p className="text-gray-600">Add items to it now.</p>
        <NavLink
          to="/"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Shop now
        </NavLink>
      </div>
      <div className="w-full my-6">
        <hr className="border-gray-300" />
        <div className="flex justify-between items-center mt-4">
          <div className="text-right w-full md:w-auto md:mr-auto">
            <p className="text-gray-600">
              Policies: Returns Policy | Terms of use | Security | Privacy |
              Infringement | © 2007-2024 Flipkart.com
            </p>
          </div>
          <div className="ml-8">
            <p className="text-blue-600">
              Need help? Visit the Help Center Contact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const cartItems = (product) => {
    let productImage = 'default-image-url'; // Fallback image URL

    if (product.images && product.images.length > 0) {
      // Check if it's an array of images
      productImage = product.images[0].replace(/[\[\]\"\\]/g, ''); // Clean up URL if needed
    } else if (product.image) {
      // For FakeStore API
      productImage = product.image;
    }

    return (
      <div key={product.id} className="flex justify-between bg-white shadow-lg rounded-lg p-4 mb-4">
        <div className="flex-shrink-0">
          <img
            src={productImage}
            alt={product.title}
            className="w-24 h-24 object-cover md:w-32 md:h-32"
          />
          <div className="flex items-center justify-between mt-2">
            <button
              className="px-2 py-1 border border-gray-400 rounded-md"
              onClick={() => handleDel(product)}
            >
              -
            </button>
            <span className="mx-2">{product.qty}</span>
            <button
              className="px-2 py-1 border border-gray-400 rounded-md"
              onClick={() => handleAdd(product)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex-grow pl-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-500 text-sm">Seller: {product.seller}</p>
          <div className="mt-2">
            <span className="text-green-600 font-semibold">₹{product.price}</span>{' '}
            <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>{' '}
            <span className="text-red-600">{product.discount}% Off</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Delivery by {product.deliveryDate} | ₹{product.deliveryCharge === 0 ? 'Free' : product.deliveryCharge}
          </p>
          <div className="flex mt-2 space-x-4">
            <button className="text-blue-600">Save for Later</button>
            <button className="text-red-600" onClick={() => handleDel(product)}>Remove</button>
          </div>
        </div>
      </div>
    );
  };

  const priceDetails = () => {
    const totalPrice = state.reduce((total, product) => total + product.price * product.qty, 0);
    const totalDiscount = state.reduce((total, product) => total + (product.originalPrice - product.price) * product.qty, 0);
    const deliveryCharges = state.some(product => product.deliveryCharge > 0) ? 80 : 0;
    const securedPackagingFee = 59;
    const finalAmount = totalPrice - totalDiscount + deliveryCharges + securedPackagingFee;

    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h4 className="font-semibold text-lg">PRICE DETAILS</h4>
        <hr className="my-2" />
        <div className="flex justify-between my-2">
          <span>Price ({state.length} items)</span>
          <span>₹{totalPrice}</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Discount</span>
          <span className="text-green-600">− ₹{totalDiscount}</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Delivery Charges</span>
          <span className="text-green-600">₹{deliveryCharges === 0 ? 'Free' : deliveryCharges}</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Secured Packaging Fee</span>
          <span>₹{securedPackagingFee}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold my-2">
          <span>Total Amount</span>
          <span>₹{finalAmount}</span>
        </div>
        <p className="text-green-600 text-sm mt-2">
          You will save ₹{totalDiscount} on this order
        </p>
      </div>
    );
  };

  const buttons = () => {
    const handlePlaceOrder = () => {
      alert("Thank you for placing your order!");
    };

    return (
      <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
        <button
          onClick={handlePlaceOrder}
          className="block text-center px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          Place Order
        </button>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 p-4">
      {state.length === 0 ? emptyCart() : (
        <div className="flex flex-col md:flex-row">
          
          <div className="md:w-2/3 pr-4">
            {state.map(cartItems)}
            {buttons()}
          </div>
          
          <div className="md:w-1/3">
            {priceDetails()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
