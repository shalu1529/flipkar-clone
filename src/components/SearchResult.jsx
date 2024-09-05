import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchResult = ({result}) => {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        // Navigate to the single product page using the product ID
        navigate(`/product/${id}`);
      };

    
  return (
    <div onClick={() => handleProductClick(result.id)} className='p-1 hover:bg-[#efefef] cursor-pointer z-10'>
      {result.title}
    </div>
  )
}

export default SearchResult



