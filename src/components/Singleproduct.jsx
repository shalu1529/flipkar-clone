import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { IoHeartCircle } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Singleproduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { wishlist, addToWishlist } = useWishlist();
  const [user] = useAuthState(auth); 
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch product. Status: ${response.status}`);
      }
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    if (!user) {
      alert("You need to login first");
      return;
    }
    dispatch({
      type: 'ADDITEM',
      payload: item,
    });
  };

  const handleWishlistClick = (product) => {
    if (!user) {
      alert("You need to login first");
      return;
    }
  
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);
  
    if (isAlreadyInWishlist) {
      // Remove from wishlist
      addToWishlist(product); // Assuming this toggles the item in the wishlist
  
      // Show remove notification
      toast.error(`${product.title} removed from wishlist!`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      // Add to wishlist
      addToWishlist(product);
  
      // Show add notification
      toast.success(`${product.title} added to wishlist!`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };
  const isWishlistItem = wishlist.some((item) => item.id === product.id);

  const Loading = () => (
    <div className="flex justify-center mt-4">
      {[...Array(7)].map((_, index) => (
        <div key={index} className="m-2">
          <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-gray-900 rounded-full"></div>
        </div>
      ))}
    </div>
  );

  const ShowProduct = () => (
    <div className="container mx-auto px-4 py-6 bg-white h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center mb-6 lg:mb-0 relative ">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-lg p-12"
            style={{ height: '500px', width: '400px' }}
          />
          <button
            onClick={() => handleWishlistClick(product)}
            // className="absolute top-4 right-4 md:top-4 md:right-2 lg:right-32 lg:top-4 text-3xl z-10"
              className="absolute top-8 right-2 md:right-6 lg:right-28 xl:right-36 text-3xl z-10"
          >
            {isWishlistItem ? (
              <BiHeartCircle className="text-red-500" />
            ) : (
              <IoHeartCircle className="text-gray-500" />
            )}
          </button>
          <div className="flex space-x-5 mt-4">
            <button
              className="bg-yellow-500 border text-white font-semibold py-3 px-12 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="bg-orange-400 text-white font-semibold py-3 px-12 rounded">
              Go to Cart
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col pt-10">
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">{product.category}</h4>
          <h1 className="text-3xl font-semibold mb-3">{product.title}</h1>
          <div className="flex items-center mb-3">
            <p className="text-lg font-semibold text-gray-700">Rating: {product.rating ? product.rating.rate : 'N/A'}</p>
            <span className="ml-2 text-yellow-500">★</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">${product.price}</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <ToastContainer />
      <div className="container mx-auto">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Singleproduct;

