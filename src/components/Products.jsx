import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setproduct] = useState([])

    useEffect(()=> {
        const fetchproducts = async()=> {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setproduct(data);
        }
        fetchproducts();
    }, [])
  return (
    <>
    <div className='bg-[#ffffff] m-4 pt-1'>
        <div className='ml-3 font-semibold text-2xl'>Best of Electronics</div>
    <div className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
      {
        products.map((product)=> (
            <div key={product.id} className="rounded border m-4 p-2 w-44">
  <img className=" h-[100px] sm:h-[150px] sm:w-96" src={product.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="text-sm">{product.title.slice(0, 20)}...</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  </div>
</div>
        ))
      }
    </div>
    </div>

    <div className='bg-[#ffffff] m-4 pt-1'>
        <div className='ml-3 font-semibold text-2xl'>Beauty, Food, Toys & more</div>
    <div className='grid grid-cols-2 sm:flex overflow-scroll scrollbar-hide'>
      {
        products.map((product)=> (
            <div key={product.id} className="rounded border m-4 p-2 w-44">
  <img className="h-[100px] sm:h-[150px] sm:w-96" src={product.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="text-sm">{product.title.slice(0, 20)}...</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  </div>
</div>
        ))
      }
    </div>
    </div>
    </>
  )
}


export default Products
