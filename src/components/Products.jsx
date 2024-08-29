import React, { useEffect, useState, useRef } from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const electronicsScrollRef = useRef(null);
    const beautyScrollRef = useRef(null);
    const navigate = useNavigate();  // useNavigate hook for navigation

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
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
            {/* Best of Electronics Section */}
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
                                    <img className="h-[100px] sm:h-[150px] sm:w-96" src={product.image} alt={product.title} />
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

            {/* Beauty, Food, Toys & More Section */}
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
                                    <img className="h-[100px] sm:h-[150px] sm:w-96" src={product.image} alt={product.title} />
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
