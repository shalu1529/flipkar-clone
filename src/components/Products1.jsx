/*import React, { useEffect, useState, useRef } from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);
    const electronicsScrollRef = useRef(null);
    const beautyScrollRef = useRef(null);
    const navigate = useNavigate();  // useNavigate hook for navigation

    useEffect(() => {
        const fetchProducts = async () => {
           // const res = await fetch("https://fakestoreapi.com/products");
           const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, []);

    const scrollLeft = (ref) => {
        ref.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = (ref) => {
        ref.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            
            <div className='bg-[#ffffff] m-4 pt-1'>
                <div className='ml-3 font-semibold text-2xl'>Best of Electronics</div>
                <div className='relative'>
                    <button onClick={() => scrollLeft(electronicsScrollRef)} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronLeft size={24} />
                    </button>
                    <div ref={electronicsScrollRef} className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
                        {
                            products.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="rounded border m-4 p-2 w-44 cursor-pointer" 
                                    onClick={() => handleProductClick(product.id)}
                                > 
                                
                                    <img className="h-[100px] sm:h-[150px] sm:w-96" src={product.images} alt={product.title} />
                                
                                    <div className="px-6 py-4">
                                        <div className="text-sm">{product.title.slice(0, 20)}...</div>
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => scrollRight(electronicsScrollRef)} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronRight size={24} />
                    </button>
                </div>
            </div>

        
            <div className='bg-[#ffffff] m-4 pt-1'>
                <div className='ml-3 font-semibold text-2xl'>Beauty, Food, Toys & more</div>
                <div className='relative'>
                    <button onClick={() => scrollLeft(beautyScrollRef)} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronLeft size={24} />
                    </button>
                    <div ref={beautyScrollRef} className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
                        {
                            products.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="rounded border m-4 p-2 w-44 cursor-pointer" 
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    <img className="h-[100px] sm:h-[150px] sm:w-96" src={product.images} alt={product.title} />
                                    <div className="px-6 py-4">
                                        <div className="text-sm">{product.title.slice(0, 20)}...</div>
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => scrollRight(beautyScrollRef)} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronRight size={24} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Products;
*/


import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const scrollRefs = useRef({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();

            // Set the fetched products directly without filtering
            setProducts(data.products);
        };
        fetchProducts();
    }, []);

    const scrollLeft = (category) => {
        scrollRefs.current[category].scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = (category) => {
        scrollRefs.current[category].scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    };

    const handleError = (event) => {
        event.target.src = 'https://via.placeholder.com/150'; // Placeholder image URL
    };

    // Get unique categories from the products array
    const uniqueCategories = [...new Set(products.map(product => product.category))];

    return (
        <>
            {uniqueCategories.map((category) => {
                // Filter products by category
                const categoryProducts = products.filter(product => product.category === category);

                // Check if the product count is more than 6, if not, duplicate products
                const displayedProducts = categoryProducts.length > 6 
                    ? categoryProducts 
                    : categoryProducts.concat(categoryProducts).slice(0, 12); // Repeat and limit to 12 items max

                return (
                    <div key={category} className='bg-[#ffffff] m-4 pt-1'>
                        <div className='ml-3 font-semibold text-2xl'>{category}</div>
                        <div className='relative'>
                            <button onClick={() => scrollLeft(category)} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white'>
                                <MdChevronLeft size={24} />
                            </button>
                            <div ref={el => scrollRefs.current[category] = el} className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
                                {displayedProducts.map((product, index) => (
                                    <div 
                                        key={index} // Use index for repeated products
                                        className="rounded border m-4 p-2 w-44 cursor-pointer" 
                                        onClick={() => handleProductClick(product.id)}
                                    > 
                                        <img 
                                            className="h-[100px] sm:h-[150px] sm:w-96" 
                                            src={product.thumbnail} 
                                            alt={product.title} 
                                            onError={handleError} 
                                        />
                                        <div className="px-6 py-4">
                                            <div className="text-sm">{product.title.slice(0, 20)}...</div>
                                            <div>&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => scrollRight(category)} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white'>
                                <MdChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Products;
