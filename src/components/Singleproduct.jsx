import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function Singleproduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

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
    dispatch({
      type: "ADDITEM",
      payload: item,
    });
  };

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
        {/* Left side: Image and buttons */}
        <div className="lg:w-1/2 flex flex-col items-center mb-6 lg:mb-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="rounded-lg shadow-lg" 
            style={{ height: '400px', width: '400px' }}
          />
          <div className="flex space-x-5 mt-4">
            <button
              className="bg-yellow-500 border  text-white   font-semibold py-3 px-12 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link 
              to="/cart" 
              className="bg-orange-400 text-white  font-semibold py-3 px-12 rounded"
            >
              Go to Cart
            </Link>
          </div>
        </div>
        {/* Right side: Product details */}
        <div className="lg:w-1/2  flex flex-col pt-10">
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
      <div className="container mx-auto">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Singleproduct;
