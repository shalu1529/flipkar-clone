import React from 'react'
import SearchResult from './SearchResult';

const SearchResultList = ({results}) => {
  return (
    <div className='absolute z-10 w-full bg-white flex-col shadow-sm border border-r-2 mt-1 max-h-28 overflow-y-scroll'>
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id}/>;
        })}
    </div>
  )
}

export default SearchResultList