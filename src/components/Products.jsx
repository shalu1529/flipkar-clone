import React, { useEffect, useState, useRef } from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [clothingProducts, setClothingProducts] = useState([]);
    const [electronicsProducts, setElectronicsProducts] = useState([]);
    const clothingScrollRef = useRef(null);
    const electronicsScrollRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();

            // Filter products for different categories
            const clothing = data.filter(product => product.category === "men's clothing" || product.category === "women's clothing");
            const electronics = data.filter(product => product.category === "electronics");

            // Set the clothing products normally
            setClothingProducts(clothing);

            // Repeat the electronics items after 6 products
            const repeatedElectronics = [...electronics, ...electronics].slice(0, 12); // Double electronics and take the first 12 items
            setElectronicsProducts(repeatedElectronics);
        };
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
            {/* Clothing Products Section */}
            <div className='bg-[#ffffff] m-4 pt-1'>
                <div className='ml-3 font-semibold text-2xl'>Best of Clothing</div>
                <div className='relative'>
                    <button onClick={() => scrollLeft(clothingScrollRef)} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronLeft size={24} />
                    </button>
                    <div ref={clothingScrollRef} className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
                        {
                            clothingProducts.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="rounded border m-4 p-2 w-44 cursor-pointer" 
                                    onClick={() => handleProductClick(product.id)}
                                > 
                                    <img className="h-[100px] sm:h-[150px] sm:w-96 object-contain mx-auto" src={product.image} alt={product.title} />
                                    <div className="px-6 py-4">
                                        <div className="text-sm">{product.title.slice(0, 20)}...</div>
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => scrollRight(clothingScrollRef)} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Electronics Products Section */}
            <div className='bg-[#ffffff] m-4 pt-1'>
                <div className='ml-3 font-semibold text-2xl'>Best of Electronics</div>
                <div className='relative'>
                    <button onClick={() => scrollLeft(electronicsScrollRef)} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white'>
                        <MdChevronLeft size={24} />
                    </button>
                    <div ref={electronicsScrollRef} className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
                        {
                            electronicsProducts.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="rounded border m-4 p-2 w-44 cursor-pointer" // Set the box width same as clothing (w-44)
                                    onClick={() => handleProductClick(product.id)}
                                > 
                                    <img className="h-[100px] sm:h-[150px] sm:w-96  object-contain mx-auto" src={product.image} alt={product.title} />
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
        </>
    );
}

export default Products;


