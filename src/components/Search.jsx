import React from 'react'

export default function Search() {
  return (
    <div className='flex align-center justify-center py-3  bg-black'>
        <input 
        className='w-fit h-fit  bg-white p-1 rounded-l-xl pl-1 opacity-70 
        placeholder:text-gray-500
        focus:border-0 active:border-0' 
        type="search"/>

        <button 
        className='w-fit h-fit p-1 rounded-r-xl bg-white opacity-70 hover:bg-green-500' 
        type="submit"><img className="w-6 h-6 pr-2 bg-white hover:bg-green-500" src="https://www.svgrepo.com/show/457053/magnifying-glass.svg"/></button>
    </div>
    )
}

